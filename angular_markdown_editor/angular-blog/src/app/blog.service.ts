import { Injectable } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  posts: Post[];
  http: XMLHttpRequest = new XMLHttpRequest();
  url: string = "http://localhost:3000/api/";
  cookie: any;
  rawCookie: string;
  user: string;
  uid: number;

  constructor() { }

  login(username: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        // console.log(this.parseJWT(this.getCookie("jwt")));
        // console.log("login")
        this.http.open("POST", "http://localhost:3000/login/");
        this.http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        this.http.withCredentials = true;
        this.http.onload = () => resolve();
        this.http.onerror = () => reject();

        this.http.onreadystatechange = (() => {
          if (this.http.readyState != 4) return;
          this.rawCookie = this.getCookie("jwt");
          this.cookie = this.parseJWT(this.getCookie("jwt"));
          this.user = this.cookie.usr;
        });

        this.http.send("username=" + username + "&password=" + password);
      } catch {
        reject();
      }
    });
  }

  fetchPosts(username: string): Promise<void> {
    return new Promise((resolve, reject) => {
      // console.log(username);
      this.http.open("GET", this.url + encodeURI(username));
      this.http.withCredentials = true;
      this.http.responseType = "json";
      this.http.onload = () => resolve();
      this.http.onerror = () => reject();

      this.http.onreadystatechange = (() => {
        if (this.http.readyState != 4) return;
        this.posts = this.http.response;
        this.uid = this.posts[this.posts.length - 1].postid;
      });

      this.http.send();
    });
  }

  getPosts(username: string): Post[] {
    // console.log("getposts")
    // console.log(this.posts)
    return this.posts;
  }

  getPost(username: string, id: number): Post {
    return this.posts.find((x) => { return x.postid === id })
  }

  newPost(username: string): Promise<[number, Post]> {
    this.uid++;
    let time = new Date();
    let p: Post = {
      "postid": this.uid,
      "created": time,
      "modified": time,
      "title": "",
      "body": ""
    }
    let ps = {
      "postid": 0,
      "username": this.user,
      "title": "",
      "body": ""
    }
    return new Promise((resolve, reject) => {
      //Add to local copy

      this.posts.push(p);

      //Add to the backend
      this.http.open("POST", this.url + encodeURI(username) + "/" + p.postid);
      console.log(this.url + encodeURI(username) + "/" + p.postid);
      this.http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      this.http.onload = () => resolve([this.http.status, p]);
      this.http.onerror = () => reject();

      this.http.onreadystatechange = (() => this.addModifyPost(p, true));

      console.log(JSON.stringify(ps))
      this.http.send(JSON.stringify(ps));
    })
  }

  updatePost(username: string, post: Post): Promise<number> {
    return new Promise((resolve, reject) => {
      //Update local copy
      this.posts = this.posts.map((x) => {
        if (x.postid === post.postid)
          return post;
        else
          return x;
      });

      //Update backend copy
      this.http.open("PUT", this.url + encodeURI(username) + "/" + post.postid);
      this.http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      this.http.onload = () => resolve(this.http.status);
      this.http.onerror = () => reject();

      this.http.onreadystatechange = (() => this.addModifyPost(post, false));

      this.http.send(JSON.stringify(post));
    });
  }

  deletePost(username: string, postid: number): Promise<number> {
    return new Promise((resolve, reject) => {
      //Remove local copy
      console.log(this)
      console.log(this.posts)
      this.posts = this.posts.filter(x => x.postid !== postid);
      // this.posts.pop();  
      console.log(this.posts)

      //Remove backend copy
      this.http.open("DELETE", this.url + encodeURI(username) + "/" + postid);
      this.http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      this.http.onload = () => resolve(this.http.status);
      this.http.onerror = () => reject();

      this.http.onreadystatechange = (() => this.removePost(postid));

      this.http.send();
    });
  }

  //// Helper fuctions ////

  populatePosts() {
    if (this.http.readyState != 4) return;

    this.posts = this.http.response;
    // console.log("populate")
    // console.log(this.http.response);
    // console.log(this.posts);
  }

  addModifyPost(post: Post, isAdd: boolean) {
    if (this.http.readyState != 4) return;

    if (isAdd === true) { // Add to posts array if the backend changed. 
      if (this.http.status === 201)
        console.log()
      // this.posts.push(post); 
      else
        ; // Add error checking
    }
    else {  // Edit the posts array if the backend changed. 
      if (this.http.status === 200) {
        console.log()
      }
      else
        ; // Add error checking
    }

  }

  removePost(postid: number) {
    if (this.http.readyState != 4) return;

    if (this.http.status === 204) {
    } else {
      ;
    }
  }

  getCookie(cname) {
    var name = cname + "=";
    // document.cookie = "jwt = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDI5MDA1ODIsInVzciI6ImNzMTQ0IiwiaWF0IjoxNTQyODkzMzgyfQ.xmiscoNljaH9erBB3K09Dvw_B0jmGLfFpB_sbadoD0E";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  parseJWT(token) {
    let base64Url = token.split('.')[1];
    let base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
  }
}

export class Post {
  postid: number;
  created: Date;
  modified: Date;
  title: string;
  body: string;
}
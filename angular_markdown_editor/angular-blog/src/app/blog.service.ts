import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private posts: Post[];
  http: XMLHttpRequest = new XMLHttpRequest();
  url:string = "http://localhost:3000/api/";
  cookie:any;
  rawCookie:string;

  constructor() { }

  login(username:string, password:string) {
    this.http.open("POST", "http://localhost:3000/login/");
    this.http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    this.http.withCredentials = true;
    this.http.onreadystatechange = (() => {
      console.log(this.parseJWT(this.getCookie("jwt")));
      this.rawCookie = this.getCookie("jwt");
      this.cookie = this.parseJWT(this.getCookie("jwt"));
    }); 
    // this.http.send("username=user2&password=blogserver"); 
    this.http.send("username="+username+"&password="+password); 

  }

  fetchPosts(username: string): void {
    console.log(username);
    this.http.open("GET", this.url + encodeURI(username));
    this.http.onreadystatechange = (() => this.populatePosts());
    this.http.withCredentials = true;
    this.http.send();
  }

  getPosts(username: string): Post[] {
    return this.posts;
  }

  getPost(username: string, id: number): Post {
    return this.posts.find((x) => { return x.postid === id })
  }

  newPost(username: string): Post {
    let p:Post = {"postid":0, 
                  "created": new Date(), 
                  "modified": new Date(),
                  "title": "",
                  "body": ""
                }
    this.http.open("POST", this.url + encodeURI(username));
    this.http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    this.http.send(JSON.stringify(p)); 
    this.http.onreadystatechange = (() => this.addModifyPost(p, true)); 
    return p; 
  }

  updatePost(username: string, post: Post): void {
    this.http.open("PUT", this.url + encodeURI(username) + "/" + post.postid);
    this.http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    this.http.send(JSON.stringify(post)); 
    this.http.onreadystatechange = (() => this.addModifyPost(post, false)); 
  }

  deletePost(username: string, postid: number): void {
    this.http.open("DELETE", this.url + encodeURI(username) + "/" + postid);
    this.http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    this.http.send();
    this.http.onreadystatechange = (() => this.removePost(postid)); 
  }

  //// Helper fuctions ////

  removePost(postid:number) {
    if (this.http.readyState != 4) return;

    if (this.http.status === 204) {
      this.posts = this.posts.filter(x => x.postid !== postid);      
    } else {
      ;
    }
  }

  populatePosts() {
    if (this.http.readyState != 4) return;

    let result = [];
    console.log(this.http.responseText);
    // let s = this.http.responseXML.getElementsByTagName('');
    // for (let i = 0; i < s.length; i++) {
    //   result.push(s[i].getAttribute("data"));
    // }
    this.posts = this.http.response; 
    console.log(this.posts);
  } 

  addModifyPost(post:Post, isAdd:boolean) {
    if (this.http.readyState != 4) return;

    if (isAdd === true) { // Add to posts array if the backend changed. 
      if(this.http.status === 201)
        this.posts.push(post); 
      else 
        ; // Add error checking
    }
    else {  // Edit the posts array if the backend changed. 
      if (this.http.status === 200) {
        this.posts = this.posts.map((x) => {
          if(x.postid === post.postid)
            return post;
          else 
            return x;
        });
      }
      else 
      ; // Add error checking
    }
      
  } 
  getCookie(cname) {
    var name = cname + "=";
    // document.cookie = "jwt = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE1NDI5MDA1ODIsInVzciI6ImNzMTQ0IiwiaWF0IjoxNTQyODkzMzgyfQ.xmiscoNljaH9erBB3K09Dvw_B0jmGLfFpB_sbadoD0E";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
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

  parseJWT(token) 
  {
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
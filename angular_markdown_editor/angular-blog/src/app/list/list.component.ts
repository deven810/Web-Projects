import { Component, OnInit } from '@angular/core';

import { BlogService, Post } from "../blog.service";
// import * as jwt from 'jsonwebtoken';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  // posts: Post[];
  user: string;
  selectedPost: Post;
  secret: string = 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c';
  constructor(public bs: BlogService) { }

  ngOnInit() {
    let decode;
    try {
      // this.bs.login("user2", "blogserver")
      this.bs.login("cs144", "password")
        .then(() => {
          decode = this.parseJWT(this.getCookie("jwt"));
          this.user = decode.usr;
          return this.bs.fetchPosts(this.user);
        })
        .then(() => {
          // this.posts = this.bs.getPosts(this.user);
          console.log(this.bs.posts)
        })
        .catch(() => console.log("fuck me"));
    }
    catch (e) {
      console.log("fuck off");
    }
  }

  onSelect(post: Post) {
    this.selectedPost = post;
  }

  onCreate() {
    this.bs.newPost(this.bs.user)
      .then((status) => {
        if (status[0] !== 201) {
          alert("Error add new post to the server.")
          // console.log(status[0],status[1].postid); 
          this.bs.deletePost(this.bs.user, status[1].postid)
        }
      })
  }

  //// Helper function ////

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

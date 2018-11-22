import { Component, OnInit } from '@angular/core';

import { BlogService, Post } from "../blog.service";
// import * as jwt from 'jsonwebtoken';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  posts:Post[]; 
  user:string;
  secret:string = 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c';
  constructor(private blogService: BlogService) { }

  ngOnInit() {
    try {
      this.blogService.login("cs144", "password");
      let decode = this.parseJWT(this.getCookie("jwt"));
      this.user = decode.usr; 
      this.blogService.fetchPosts(this.user);
      this.posts = this.blogService.getPosts(this.user);
      console.log(this.posts);
    } 
    catch (e) {
      console.log("fuck off");
    }
  }

  //// Helper function ////

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

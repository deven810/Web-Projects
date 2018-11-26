import { Component, OnInit } from '@angular/core';

import { BlogService, Post } from "../blog.service";
import { ActivatedRoute, Router } from '@angular/router';
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
  constructor(private route: ActivatedRoute, private router: Router, public bs: BlogService) { }
  // constructor(private route: ActivatedRoute, private blogService: BlogService, private router: Router) { }

  ngOnInit() {
    let decode;
    try {
      // this.bs.login("user2", "blogserver")
      this.bs.login("cs144", "password")
        .then(() => {
          decode = this.bs.parseJWT(this.bs.getCookie("jwt"));
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
        this.router.navigate(['/edit/'+status[1].postid])
      })
  }

  //// Helper function ////

}

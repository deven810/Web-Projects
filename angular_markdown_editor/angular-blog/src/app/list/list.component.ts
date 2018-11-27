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
      this.user = this.bs.parseJWT(this.bs.getCookie("jwt")).usr;
      console.log(this.user)
      console.log(document.cookie)
      console.log("yeah")
      this.bs.fetchPosts(this.user)
        .then(() => {
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
        let statusCode = status[0];
        let post = status[1];
        if (statusCode !== 201) {
          console.log('deven');
          alert("Error add new post to the server.")
          // console.log(status[0],status[1].postid); 
          this.bs.deletePost(this.bs.user, post.postid)
          this.router.navigate(['/'])
        } else {
          console.log('haejin');
          this.router.navigate(['/edit/'+post.postid])
        }
      })
  }

  //// Helper function ////

}

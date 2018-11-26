import { Component, OnInit, Input } from '@angular/core';

import { BlogService, Post } from "../blog.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() post:Post;

  constructor(private bs:BlogService) { }

  ngOnInit() {
  }

  onDelete() {
    // this.bs.posts = this.bs.posts.filter(x => x.postid !== this.post.postid)
    this.bs.deletePost(this.bs.user, this.post.postid)
    .then((status) => {
      if (status !== 204) { 
        alert("Error deleting the post from the server")
      }
    })
    console.log(this.bs.posts)
  }

  onPreview() {

    // this.bs.posts.push()
    this.onSave();
    console.log("Asked for preview")
  }

  onSave() {
    this.post.modified = new Date();
    this.bs.updatePost(this.bs.user, this.post)
    .then((status) => {
      if (status !== 200) {
        alert("Error updating the post from the server");
        console.log(status)
      }
    })
  }

}

import { Component, OnInit, Input } from '@angular/core';

import { BlogService, Post } from "../blog.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() post:Post;

  constructor() { }

  ngOnInit() {
  }

  onDelete() {
    console.log(this.post.title)
  }

}

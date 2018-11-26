import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService, Post } from "../blog.service";
import { Parser, HtmlRenderer } from 'commonmark';

@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css']
})
export class PreviewComponent implements OnInit {
  @Input() post: Post;
  constructor(private route: ActivatedRoute, private blogService: BlogService, private router: Router) {
    this.route.paramMap.subscribe(() => this.getPost());
  }

  ngOnInit() {
  }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const user = this.blogService.user;
    console.log(user)
    this.post = this.blogService.getPost(this.blogService.user, Number(id))
    console.log(this.post)
  }


}

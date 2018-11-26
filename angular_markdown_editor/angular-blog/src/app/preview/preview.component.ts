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
  display:Post;
  reader:Parser;
  writer:HtmlRenderer;

  constructor(private route: ActivatedRoute, private blogService: BlogService, private router: Router) {
  }

  ngOnInit() {
    this.blogService.login("cs144", "password")
    .then(() => {
      return this.blogService.fetchPosts(this.blogService.parseJWT(this.blogService.getCookie("jwt")).usr);
    })
    .then(() => {
      // console.log(this.blogService.posts)
      this.route.paramMap.subscribe(() => this.getPost());
    })
    this.reader = new Parser();
    this.writer = new HtmlRenderer(); 
  }

  getPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    const user = this.blogService.user;
    this.post = this.blogService.getPost(this.blogService.user, id)
    console.log(this.blogService.posts)
    
    this.display.title = this.writer.render(this.reader.parse(this.post.title))
    this.display.body = this.writer.render(this.reader.parse(this.post.body))
    console.log(this.post)

  }

  onEdit(): void {
    this.router.navigate(['/edit/'+this.post.postid])
  }
}

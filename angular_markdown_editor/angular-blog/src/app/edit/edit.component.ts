import { Component, OnInit, Input, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService, Post } from "../blog.service";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() post: Post;
  didRefresh: boolean = false;

  // AUTOSAVE: saveBeforeRefresh() function gets invoked and updates post before the user closes tab or refreshes page
  @HostListener('window:beforeunload') saveBeforeRefresh(): void {
    this.didRefresh = true;
    this.blogService.updatePost(this.blogService.user, this.post);
  }

  constructor(private route: ActivatedRoute, private blogService: BlogService, private router: Router) { }

  ngOnInit() {
    this.blogService.login("cs144", "password")
      .then(() => {
        return this.blogService.fetchPosts(this.blogService.parseJWT(this.blogService.getCookie("jwt")).usr);
      })
      .then(() => {
        // console.log(this.blogService.posts)
        this.route.paramMap.subscribe(() => this.getPost());
      })

  }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const user = this.blogService.user;
    // console.log(this.blogService.posts)
    this.post = this.blogService.getPost(this.blogService.user, Number(id))
    console.log(this.post)
  }

  onDelete() {
    // this.bs.posts = this.bs.posts.filter(x => x.postid !== this.post.postid)
    this.blogService.deletePost(this.blogService.user, this.post.postid)
      .then((status) => {
        if (status !== 204) {
          alert("Error deleting the post from the server")
        }
        this.router.navigate(['/']);
      })
    console.log(this.blogService.posts)
  }

  onPreview() {
    this.onSave();
    this.router.navigate(['/preview/'+this.post.postid])
    // console.log("Asked for preview")
  }

  onSave() {
    this.post.modified = new Date();
    this.blogService.updatePost(this.blogService.user, this.post)
      .then((status) => {
        if (status !== 200) {
          alert("Error updating the post from the server");
          console.log(status)
        }
      })
  }
}






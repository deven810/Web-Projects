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
        return this.blogService.fetchPosts(this.parseJWT(this.getCookie("jwt")).usr);
      })
      .then(() => {
        this.route.paramMap.subscribe(() => this.getPost());
      })

  }

  getPost(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const user = this.blogService.user;
    console.log(user)
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

    // this.bs.posts.push()
    this.onSave();
    console.log("Asked for preview")
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






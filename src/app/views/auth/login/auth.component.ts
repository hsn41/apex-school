import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { Post } from "../auth.model";
import { AuthService } from "../auth.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit, OnDestroy {
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(private AuthService: AuthService) {}

  ngOnInit() {
    console.log("Reached");
    this.AuthService.getPosts();
    this.postsSub = this.AuthService.getPostUpdateListener().subscribe(
      (posts: Post[]) => {
        this.posts = posts;
        console.log(posts);
      }
    );
  }
  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}

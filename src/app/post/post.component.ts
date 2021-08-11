import { Component, OnInit } from '@angular/core';
import { Post } from './post';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { User } from './user';
import { ActivatedRoute } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';
import { PostService } from './post.service';
import { UserService } from './user.service';
import { PostFilterPipe } from './post-filter.pipe';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers: [PostService, UserService, HttpClient]
})
export class PostComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private alertifyService: AlertifyService,
    private postService: PostService,
    private userService: UserService
  ) { }

  posts: Post[] = [];
  users: User[] = [];
  todayDate = new Date(2019,6,31);
  filterText:string = "";

  ngOnInit(): void {
    this.getUsers();
    this.activatedRoute.params.subscribe(params => {
      this.getPosts(params["userId"])
    })
  }

  getPosts(userId: number): void {
    this.postService.getPosts(userId).subscribe(data => {
      this.posts = data
    });
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(data => {
      this.users = data
    });
  }

  addToFavourites(post: Post): void {
    this.alertifyService.success("Added post to favorites." + post.title)
  }

}

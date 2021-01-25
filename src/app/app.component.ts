import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'nityo-test';
  loadedUsers;
  isFetching = false;
  error = null;

  constructor(private http: HttpClient, private usersService: UsersService) { }

  ngOnInit(): void {
  }

  onFetchUsers() {
    this.usersService.fetchPosts().subscribe(
      users => {
        this.loadedUsers = users[0];
      },
      error => {
        this.error = error.message;
      }
    );
  }
}

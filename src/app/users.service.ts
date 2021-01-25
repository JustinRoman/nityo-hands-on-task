import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { User } from './user.model';

@Injectable({ providedIn: 'root' })

export class UsersService {
    key = 'data';
    url = 'https://reqres.in/api/users?page=2';

    constructor(private http: HttpClient) {}

    fetchPosts() {
        return this.http
            .get<User>(this.url)
            .pipe(
                map(responseData => {
                    const usersArray: User[] = [];

                    for (const key in responseData) {
                        if (responseData.hasOwnProperty(key) && key === this.key) {
                            usersArray.push({ ...responseData[key]});
                        }
                    }
                    
                    return usersArray;
                }),
                catchError(errorRes => {
                    return throwError(errorRes);
                })
            );
    }
}
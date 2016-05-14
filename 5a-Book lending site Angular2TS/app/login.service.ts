import {Injectable} 		 				from 'angular2/core';
import {Observable} 		 				from 'rxjs/Observable';
import {Http, Request, Response, Headers, RequestOptions} 	from 'angular2/http';

import {User} 								from './user';

@Injectable()
export class LoginService {

    constructor(private http: Http) {

    }

    public getPass(username: string) : Observable<User[]> {
      return this.http.get('/api/users/' + username)
		      		  .map(res => <User[]> res.json());

    };

}
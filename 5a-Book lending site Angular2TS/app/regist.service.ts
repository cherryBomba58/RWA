import {Injectable} 		 				from 'angular2/core';
import {Observable} 		 				from 'rxjs/Observable';
import {Http, Request, Response, Headers, RequestOptions} 	from 'angular2/http';

import {User} 								from './user';

@Injectable()
export class RegistService {

    constructor(private http: Http) {

    }

    public postUser(user: User) : Observable<User[]> {
      let body = JSON.stringify(user);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.post('/api/users', body, options)
      				  .map(res => <User[]> res.json());
    };

}
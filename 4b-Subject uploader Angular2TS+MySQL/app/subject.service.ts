import {Injectable} 		 				from 'angular2/core';
import {Observable} 		 				from 'rxjs/Observable';
import {Http, Request, Response, Headers, RequestOptions} 	from 'angular2/http';
import {Subject} 		 					from './subject';

@Injectable()
export class SubjectService {

    constructor(private http: Http) {

    }

    public getSubjects() : Observable<Subject[]> {
      return this.http.get('/api/subjects')
		      		  .map(res => <Subject[]> res.json());
    };

    public postSubject(subject: Subject) : Observable<Subject[]> {
      let body = JSON.stringify(subject);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.post('/api/subjects', body, options)
      				  .map(res => <Subject[]> res.json());
    };

    public putSubject(code: string, subject: Subject) : Observable<Subject[]> {
      let body = JSON.stringify(subject);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.put('/api/subjects/' + code, body, options)
      				  .map(res => <Subject[]> res.json());
    };

    public deleteSubject(code: string) : Observable<Subject[]> {
      return this.http.delete('/api/subjects/' + code)
      				  .map(res => <Subject[]> res.json());
    };

}
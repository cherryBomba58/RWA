import {Injectable} 		 				from 'angular2/core';
import {Observable} 		 				from 'rxjs/Observable';
import {Http, Request, Response, Headers, RequestOptions} 	from 'angular2/http';
import {Subject} 		 					from './subject';

@Injectable()
export class SubjectService {

    constructor(private http: Http) {

    }

    public getSubjects() : Observable<Subject[]> {
      console.log("A service/getSubjects()-ben tetszem lenni.");
      return this.http.get('/api/subjects')
		      		  .map(res => <Subject[]> res.json());
    };

    public postSubject(subject: Subject) : Observable<Subject[]> {
      console.log("A service/postSubjects()-ben tetszem lenni.");
      console.log(subject);
      let body = JSON.stringify(subject);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      console.log(body + " " + headers + " " + options);

      return this.http.post('/api/subjects', body, options)
      				  .map(res => <Subject[]> res.json());
    };

    public putSubject(code: string, subject: Subject) : Observable<Subject[]> {
      console.log("A service/putSubjects()-ben tetszem lenni.");
      console.log(subject);
      console.log(code);
      let body = JSON.stringify(subject);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      console.log(body + " " + headers + " " + options);

      return this.http.put('/api/subjects/' + code, body, options)
      				  .map(res => <Subject[]> res.json());
    };

    public deleteSubject(code: string) : Observable<Subject[]> {
      console.log("A service/deleteSubjects()-ben tetszem lenni.");
      console.log(code);
      return this.http.delete('/api/subjects/' + code)
      				  .map(res => <Subject[]> res.json());
    };

}
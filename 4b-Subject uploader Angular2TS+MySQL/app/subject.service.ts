import {Injectable} 		 				from 'angular2/core';
import {Observable} 		 				from 'rxjs/Observable';
import {Http, Request, Response, Headers, RequestOptions} 	from 'angular2/http';
import {Subject} 		 					from './subject';

@Injectable()
export class SubjectService {

    constructor(private http: Http) {

    }

    public getSubjects() {
      return this.http.get('/app/subjects')
		      		  .map(res => <Subject[]> res.json().data);
    };

    public postSubject(subject: Subject) : Observable<Subject> {
      let body = JSON.stringify({"code" : subject.code, "name" : subject.name,
      	"credit" : subject.credit, "teacher" : subject.teacher});
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.post('/app/subjects', body, options)
      				  .map(res => <Subject> res.json().data);
    };

    public putSubject(code: string, subject: Subject) : Observable<Subject> {
      let body = JSON.stringify({"code" : subject.code, "name" : subject.name,
      	"credit" : subject.credit, "teacher" : subject.teacher});
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      return this.http.put('/app/subjects/{code}', body, options)
      				  .map(res => <Subject> res.json().data);
    };

    public deleteSubject(code: string) : Observable<Subject> {
      return this.http.delete('/app/subjects/{code}')
      				  .map(res => <Subject> res.json().data);
    };

}
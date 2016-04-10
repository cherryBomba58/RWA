import {Component, Injectable} 		from 'angular2/core';
import {NgForm}    			from 'angular2/common';
import {Http, Headers, HTTP_PROVIDERS}	from 'angular2/http';
import {Observable}			from 'rxjs/Observable';
import { Subject } 			from './subject';

@Component({
  selector: 'subject-form',
  viewProviders: [HTTP_PROVIDERS],
  templateUrl: 'app/subject-form.component.html'
})

@Injectable()
export class SubjectFormComponent {
  subjects = [];

  constructor(http:Http) {
    // here we select the data from table
    http.get('/api/subjects')
    		.map(res => res.json())
        	.subscribe(subjects => this.subjects = subjects);
  }
  addRow(code: string, name: string, credit: number, teacher: string) {
    // here we insert row to table
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    http.post('/api/subjects', {"code": code, "name": name, "credit": credit,
    "teacher": teacher}, {headers: Headers})
        	.map(res => res.json())
        	.subscribe(subjects => this.subjects = subjects);
  }
  modRow(code: string, name: string, credit: number, teacher: string, scode: string) {
    // here we update a row in table
    var headers = new Headers();
    headers.append("Content-Type", "application/json");
    http.put('/api/subjects/${scode}', {"code": code, "name": name, "credit": credit,
    "teacher": teacher}, {headers: Headers})
        	.map(res => res.json())
        	.subscribe(subjects => this.subjects = subjects);
  }
  delRow(scode: string) {
    // here we delete a row in table
    http.delete('/api/subjects/${code}')
        	.map(res => res.json())
        	.subscribe(subjects => this.subjects = subjects);
  }
}
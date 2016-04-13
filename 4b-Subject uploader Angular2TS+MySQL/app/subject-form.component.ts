import {Component, OnInit} 	from 'angular2/core';
import {Subject} 		from './subject';
import {SubjectRESTClient} 	from './subject-RESTClient';

@Component({
  selector: 'subject-form',
  viewProviders: [SubjectRESTClient],
  templateUrl: 'app/subject-form.component.html'
})

export class SubjectFormComponent implements OnInit {
  
  constructor(subjectRESTClient: SubjectRESTClient) {

  }

  subjects: Subject[];

  ngOnInit() {
    this.getRows();
  }

  getRows() {
    // here we get all the subjects from database
    this.subjectRESTClient.getSubjects()
    			  .subscribe(subjects => this.subjects = subjects);
  }

  addRow(code: string, name: string, credit: number, teacher: string) {
    // here we insert row to table
    sub = new Subject(code, name, credit, teacher);
    this.subjectRESTClient.postSubject(sub)
        		  .subscribe(subject => this.subjects.push(subject));
  }
  modRow(code: string, name: string, credit: number, teacher: string, scode: string) {
    // here we update a row in table
    sub = new Subject(code, name, credit, teacher);
    this.subjectRESTClient.putSubject(scode, sub)
        		  .subscribe(subject => {
				i: number;
				for(i = 0; i < subjects.length; i++) {
					if(subjects.at(i).at(0) == scode)
						subjects.removeAt(i);
				}
				this.subjects.push(subject);
			  });
  }
  delRow(scode: string) {
    // here we delete a row in table
    this.subjectRESTClient.deleteSubject(scode)
        		  .subscribe(subject => {
				i: number;
				for(i = 0; i < subjects.length; i++) {
					if(subjects.at(i).at(0) == subject.code)
						subjects.removeAt(i);
				}
			  });
  }
}
import {Component, OnInit} 	from 'angular2/core';
import {Subject} 			from './subject';
import {SubjectRESTClient} 	from './subject-RESTClient';

@Component({
  selector: 'subject-form',
  viewProviders: [SubjectRESTClient],
  templateUrl: 'app/subject-form.component.html'
})

export class SubjectFormComponent implements OnInit {
  
  constructor(private subjectRESTClient: SubjectRESTClient) {

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
    var sub = new Subject(code, name, credit, teacher);
    this.subjectRESTClient.postSubject(sub)
        		  .subscribe(subject => this.subjects.push(subject));
  }
  modRow(code: string, name: string, credit: number, teacher: string, scode: string) {
    // here we update a row in table
    var sub = new Subject(code, name, credit, teacher);
    this.subjectRESTClient.putSubject(scode, sub)
        		  .subscribe(subject => {
				for(var i = 0; i < this.subjects.length; i++) {
					if(this.subjects[i][0] == scode)
						this.subjects.splice(i, 1);
				}
				this.subjects.push(subject);
			  });
  }
  delRow(scode: string) {
    // here we delete a row in table
    this.subjectRESTClient.deleteSubject(scode)
        		  .subscribe(subject => {
				for(var i = 0; i < this.subjects.length; i++) {
					if(this.subjects[i][0] == subject.code)
						this.subjects.splice(i, 1);
				}
			  });
  }
}
import {Component, OnInit} 	from 'angular2/core';
import {Subject} 			from './subject';
import {SubjectService} 	from './subject.service';

@Component({
  selector: 'subject-form',
  viewProviders: [SubjectService],
  templateUrl: 'app/subject-form.component.html'
})

export class SubjectFormComponent implements OnInit {
  
  subjects:Subject[];
  
  constructor(private subjectService: SubjectService) {

  }

  ngOnInit() {
    this.getRows();
  }

  getRows() {
    // here we get all the subjects from database
    this.subjectService.getSubjects()
    			  .subscribe(subjects => this.subjects = subjects);
  }
  addRow(code: string, name: string, credit: number, teacher: string) {
    // here we insert row to table
    var sub = new Subject(code, name, credit, teacher);
    this.subjectService.postSubject(sub)
        		  .subscribe(subject => this.subjects.push(subject));
  }
  modRow(code: string, name: string, credit: number, teacher: string, scode: string) {
    // here we update a row in table
    var sub = new Subject(code, name, credit, teacher);
    this.subjectService.putSubject(scode, sub)
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
    this.subjectService.deleteSubject(scode)
        		  .subscribe(subject => {
					for(var i = 0; i < this.subjects.length; i++) {
						if(this.subjects[i][0] == subject.code)
							this.subjects.splice(i, 1);
					}
			  	  });
  }
}
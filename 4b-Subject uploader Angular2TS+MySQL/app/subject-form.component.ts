import {Component, OnInit} 	from 'angular2/core';
import {Subject} 			from './subject';
import {SubjectService} 	from './subject.service';

@Component({
  selector: 'subject-form',
  viewProviders: [SubjectService],
  templateUrl: 'app/subject-form.component.html'
})

export class SubjectFormComponent implements OnInit {
  
  subjects = [];
  
  constructor(private subjectService: SubjectService) {

  }

  ngOnInit() {
    this.getRows();
    console.log(this.subjects.length);
    var sub = new Subject("BME", "VIK", 3, "XY");
    this.subjects.push(sub);
    console.log(this.subjects.length);
    console.log(this.subjects);
  }

  getRows() {
    // here we get all the subjects from database
    console.log("Here I am, rock you like a hurricane: subject-form.component/getRows()");
    this.subjectService.getSubjects()
    			  .subscribe(subjects => this.subjects = subjects);
  }
  addRow(code: string, name: string, credit: number, teacher: string) {
    // here we insert row to table
    console.log("Here I am, highway to hell: subject-form.component/addRow()");
    var sub = new Subject(code, name, credit, teacher);
    this.subjectService.postSubject(sub)
        		  .subscribe(subjects => this.subjects = subjects);
  }
  modRow(code: string, name: string, credit: number, teacher: string, scode: string) {
    // here we update a row in table
    console.log("Here I am, welcome to the jungle: subject-form.component/modRow()");
    var sub = new Subject(code, name, credit, teacher);
    this.subjectService.putSubject(scode, sub)
        		  .subscribe(subjects => this.subjects = subjects);
  }
  delRow(scode: string) {
    // here we delete a row in table
    console.log("Here I am, in the dance of death: subject-form.component/deleteRow()");
    this.subjectService.deleteSubject(scode)
        		  .subscribe(subjects => this.subjects = subjects);
  }
}
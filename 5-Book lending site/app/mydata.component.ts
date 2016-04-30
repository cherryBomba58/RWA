import {Component, OnInit} 	from 'angular2/core';
import {Book} 			from './book';
import {User} 			from './user';
import {Offer} 			from './offer';
/*import {SubjectService} 	from './subject.service';*/

@Component({
  selector: 'mydata',
  /*viewProviders: [SubjectService],*/
  templateUrl: 'app/public/mydata.html'
})

export class MyDataComponent implements OnInit {
  
  offers = [];
  users = [];
  books = [];
  
  /*constructor(private subjectService: SubjectService) {

  }*/

  ngOnInit() {
    this.getRows();
  }

  getRows() {
    /*// here we get all the subjects from database
    this.subjectService.getSubjects()
    			  .subscribe(subjects => this.subjects = subjects);*/
  }
  /*addRow(code: string, name: string, credit: number, teacher: string) {
    // here we insert row to table
    var sub = new Subject(code, name, credit, teacher);
    this.subjectService.postSubject(sub)
        		  .subscribe(subjects => this.subjects = subjects);
  }
  modRow(code: string, name: string, credit: number, teacher: string, scode: string) {
    // here we update a row in table
    var sub = new Subject(code, name, credit, teacher);
    this.subjectService.putSubject(scode, sub)
        		  .subscribe(subjects => this.subjects = subjects);
  }
  delRow(scode: string) {
    // here we delete a row in table
    this.subjectService.deleteSubject(scode)
        		  .subscribe(subjects => this.subjects = subjects);
  }*/
}
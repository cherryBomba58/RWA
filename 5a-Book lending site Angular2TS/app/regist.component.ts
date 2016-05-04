import {Component, OnInit} 	from 'angular2/core';
/*import {Book} 			from './book';
import {User} 			from './user';
import {Offer} 			from './offer';
import {SubjectService} 	from './subject.service';*/

@Component({
  selector: 'regist',
  /*viewProviders: [SubjectService],*/
  templateUrl: 'app/public/regist.html'
})

export class RegistComponent implements OnInit {

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
  addRow(lender: string, borrower: string, writer: string, title: string, year: number, publisher: string, p_year: number, ISBN: string) {
    
  }
  /*modRow(code: string, name: string, credit: number, teacher: string, scode: string) {
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
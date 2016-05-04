import {Component, OnInit} 	from 'angular2/core';
/*import {SubjectService} 	from './subject.service';*/

import {Offering}		from './offering';

@Component({
  selector: 'offers',
  /*viewProviders: [SubjectService],*/
  templateUrl: 'app/public/offers.html'
})

export class OffersComponent implements OnInit {

  offerings = [new Offering(1, 'masvalaki', 'valaki', 'George Orwell', '1984', 1948, 'Eur�pa K�nyvkiad�', 1989, '1234'),
	       new Offering(2, 'valaki', 'masvalaki', 'Pet�fi S�ndor', '�sszes k�ltem�nyei', 1986, 'Sz�pirodalmi K�nyvkiad�', 1986, '2345'),
	       new Offering(3, 'bonbon', 'Senki', 'Miksz�th K�lm�n', 'Beszterce ostroma', 1896, 'Sz�pirodalmi K�nyvkiad�', 1988, '3456')];
  
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
    this.offerings.push(new Offering(4, lender, borrower, writer, title, year, publisher, p_year, ISBN));
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
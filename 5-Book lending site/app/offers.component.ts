import {Component, OnInit} 	from 'angular2/core';
import {Book} 			from './book';
import {User} 			from './user';
import {Offer} 			from './offer';
/*import {SubjectService} 	from './subject.service';*/

@Component({
  selector: 'offers',
  /*viewProviders: [SubjectService],*/
  templateUrl: 'app/public/offers.html'
})

export class OffersComponent implements OnInit {
  
  users = [new User('valaki', 'valaki@valaki.hu', 'valahol', 'probajelszo', 'proba1'),
           new User('masvalaki', 'masvalaki@masvalaki.hu', 'mashol', 'masikproba', 'proba2'),
           new User('bonbon', 'bonbon@bonbonetti.hu', 'mittudomenhol', 'megegyproba', 'proba3')];
  books = [new Book('1234', 'George Orwell', '1984', 1948, 'Európa Könyvkiadó', 1989),
           new Book('2345', 'Petõfi Sándor', 'Összes költeményei', 1986, 'Szépirodalmi Könyvkiadó', 1986),
           new Book('3456', 'Mikszáth Kálmán', 'Beszterce ostroma', 1896, 'Szépirodalmi Könyvkiadó', 1988)];
  offers = [new Offer(1, 'masvalaki', 'valaki', '1234'),
            new Offer(2, 'valaki', 'masvalaki', '2345'),
	    	new Offer(3, 'bonbon', null, '3456')];
  offerings = [('masvalaki', 'valaki', 'George Orwell', '1984', 1948, 'Európa Könyvkiadó', 1989, '1234'),
	       ('valaki', 'masvalaki', 'Petõfi Sándor', 'Összes költeményei', 1986, 'Szépirodalmi Könyvkiadó', 1986, '2345'),
	       ('bonbon', 'Senki', 'Mikszáth Kálmán', 'Beszterce ostroma', 1896, 'Szépirodalmi Könyvkiadó', 1988, '3456')];
  
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
    var newOffering = (lender, borrower, writer, title, year, publisher, p_year, ISBN);
    this.offerings.push(newOffering);
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
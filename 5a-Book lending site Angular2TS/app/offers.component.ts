import {Component, OnInit} 	from 'angular2/core';
/*import {SubjectService} 	from './subject.service';*/

import {Offering}		from './offering';

@Component({
  selector: 'offers',
  /*viewProviders: [SubjectService],*/
  templateUrl: 'app/public/offers.html'
})

// gettelni és putolni fog
export class OffersComponent implements OnInit {

  offerings = [new Offering(1, 'masvalaki', 'valaki', 'George Orwell', '1984', 1948, 'Európa Könyvkiadó', 1989, '1234'),
	       new Offering(2, 'valaki', 'masvalaki', 'Petőfi Sándor', 'Összes költeményei', 1986, 'Szépirodalmi Könyvkiadó', 1986, '2345'),
	       new Offering(3, 'bonbon', 'Senki', 'Mikszáth Kálmán', 'Beszterce ostroma', 1896, 'Szépirodalmi Könyvkiadó', 1988, '3456')];
  
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
  
  borrow(isbn: string) {
    for(var i=0; i<this.offerings.length; i++) {
	  if(this.offerings[i].ISBN == isbn && this.offerings[i].borrower == 'Senki') {
	    this.offerings[i].borrower = 'valaki';
	  }
	}
  }
  
  /*modRow(code: string, name: string, credit: number, teacher: string, scode: string) {
    // here we update a row in table
    var sub = new Subject(code, name, credit, teacher);
    this.subjectService.putSubject(scode, sub)
        		  .subscribe(subjects => this.subjects = subjects);
  }*/
}
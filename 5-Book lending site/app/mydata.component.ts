import {Component, OnInit} 	from 'angular2/core';
/*import {SubjectService} 	from './subject.service';*/

import {MyData} 			from './mydata';
import {Borrowing} 			from './borrowing';
import {Lending} 			from './lending';

@Component({
  selector: 'mydata',
  /*viewProviders: [SubjectService],*/
  templateUrl: 'app/public/mydata.html'
})

export class MyDataComponent implements OnInit {
  
  mydata = [new MyData('valaki', 'valaki@valaki.hu', 'valahol', 5)];
  borrowings = [new Borrowing('masvalaki', 'George Orwell', '1984', 1948, 'Európa Könyvkiadó', 1989, '1234')];
  lendings = [new Lending('masvalaki', 'Petőfi Sándor', 'Összes költeményei', 1986, 'Szépirodalmi Könyvkiadó', 1986, '2345')];
  
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
  addRow(writer: string, title: string, year: number, publisher: string, p_year: number, ISBN: string) {
    this.lendings.push(new Lending('Senki', writer, title, year, publisher, p_year, ISBN));
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
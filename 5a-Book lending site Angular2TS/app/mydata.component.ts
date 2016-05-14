import {Component, OnInit} 	from 'angular2/core';
import {MyDataService} 		from './mydata.service';

import {MyData} 			from './mydata';
import {Borrowing} 			from './borrowing';
import {Lending} 			from './lending';
import {Book} 				from './book';
import {Offer} 				from './offer';

@Component({
  selector: 'mydata',
  viewProviders: [MyDataService],
  templateUrl: 'app/public/mydata.html'
})

// gettelni és postolni fog, esetleg módosítani, törölni is
export class MyDataComponent implements OnInit {
  
  constructor(private myDataService: MyDataService) {

  }
  
  mydata = [];
  borrowings = [];
  lendings = [];
  username = 'iszak';

  ngOnInit() {
    this.getMyData();
    this.getBorrowings();
    this.getLendings();
  }

  getMyData() {
    this.myDataService.getMyData(this.username)
    			  .subscribe(mydata => this.mydata = mydata);
  }
  getBorrowings() {
    this.myDataService.getBorrowings(this.username)
    			  .subscribe(borrowings => this.borrowings = borrowings);
  }
  getLendings() {
    this.myDataService.getLendings(this.username)
    			  .subscribe(lendings => this.lendings = lendings);
  }
  addLending(writer: string, title: string, year: number, publisher: string, p_year: number, ISBN: string) {
    var book = new Book(writer, title, year, publisher, p_year, ISBN);
    this.myDataService.postBook(book)
        		  .subscribe(books => console.log(books));
    
    var off = new Offer(null, this.username, null, ISBN);
    this.myDataService.postLending(off)
        		  .subscribe(lendings => this.lendings = lendings);
  }
}
import {Injectable} 		 				from 'angular2/core';
import {Observable} 		 				from 'rxjs/Observable';
import {Http, Request, Response, Headers, RequestOptions} 	from 'angular2/http';

import {MyData} 							from './mydata';
import {Borrowing} 							from './borrowing';
import {Lending} 							from './lending';
import {Book} 								from './book';
import {Offer} 								from './offer';

@Injectable()
export class MyDataService {

    constructor(private http: Http) {

    }

    public getMyData(username: string) : Observable<MyData[]> {
      return this.http.get('/api/mydata/' + username)
		      		  .map(res => <MyData[]> res.json());
    };
    
    public getBorrowings(username: string) : Observable<Borrowing[]> {
      return this.http.get('/api/borrowings/' + username)
		      		  .map(res => <Borrowing[]> res.json());
    };

    public getLendings(username: string) : Observable<Lending[]> {
      return this.http.get('/api/lendings/' + username)
		      		  .map(res => <Lending[]> res.json());
    };

    public postBook(book: Book) : Observable<Book[]> {
      let body = JSON.stringify(book);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      
      console.log(body);

      return this.http.post('/api/books', body, options)
      				  .map(res => <Book[]> res.json());
    };
      				  
    public postLending(offer: Offer) : Observable<Lending[]> {			  
      let body = JSON.stringify(offer);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      
      console.log(body);

      return this.http.post('/api/offers', body, options)
      				  .map(res => <Lending[]> res.json());

    };
}
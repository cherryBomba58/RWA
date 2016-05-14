import {Injectable} 		 				from 'angular2/core';
import {Observable} 		 				from 'rxjs/Observable';
import {Http, Request, Response, Headers, RequestOptions} 	from 'angular2/http';

import {Offering}							from './offering';

@Injectable()
export class OffersService {

    constructor(private http: Http) {

    }

    public getOffers() : Observable<Offering[]> {
      return this.http.get('/api/offers')
		      		  .map(res => <Offering[]> res.json());
    };

    public putBorrower(offerid: number, borrower: Offering) : Observable<Offering[]> {
      let body = JSON.stringify(borrower);
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });
      
      console.log(body);
      console.log('api/offers/' + offerid);

      return this.http.put('api/offers/' + offerid, body, options)
      				  .map(res => <Offering[]> res.json());
    };

}
import {Component} 			from 'angular2/core';
import {HTTP_PROVIDERS} 	from 'angular2/http';

import {Book} 				from './book';
import {User} 				from './user';
import {Offer} 				from './offer';
import {HomeComponent} 		from './home.component';
import {MyDataComponent} 	from './mydata.component';
import {OffersComponent} 	from './offers.component';
/*import {SubjectService}	from './subject.service';*/

@Component({
    selector: 'my-app',
    template: '<mydata></mydata>',
    directives: [HomeComponent, MyDataComponent, OffersComponent],
    /*providers: [HTTP_PROVIDERS, SubjectService]*/
})
export class AppComponent {
  users = [new User('valaki', 'valaki@valaki.hu', 'valahol', 'probajelszo', 'proba1'),
           new User('masvalaki', 'masvalaki@masvalaki.hu', 'mashol', 'masikproba', 'proba2'),
           new User('bonbon', 'bonbon@bonbonetti.hu', 'mittudomenhol', 'megegyproba', 'proba3')];
  books = [new Book('1234', 'George Orwell', '1984', 1948, 'Európa Könyvkiadó', 1989),
           new Book('2345', 'Petõfi Sándor', 'Összes költeményei', 1986, 'Szépirodalmi Könyvkiadó', 1986),
           new Book('3456', 'Mikszáth Kálmán', 'Beszterce ostroma', 1896, 'Szépirodalmi Könyvkiadó', 1988)];
  offers = [new Offer(1, 'masvalaki', 'valaki', '1234'),
            new Offer(2, 'valaki', 'masvalaki', '2345'),
	    	new Offer(3, 'bonbon', null, '3456')];
}
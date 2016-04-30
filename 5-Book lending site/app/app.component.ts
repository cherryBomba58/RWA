import {Component} 		from 'angular2/core';
import {HTTP_PROVIDERS} 	from 'angular2/http';

import {Book} 			from './book';
import {User} 			from './user';
import {Offer} 			from './offer';
import {HomeComponent} 		from './home.component';
import {MyDataComponent} 	from './mydata.component';
/*import {SubjectService}	from './subject.service';*/

@Component({
    selector: 'my-app',
    template: '<home></home>',
    directives: [HomeComponent, MyDataComponent],
    /*providers: [HTTP_PROVIDERS, SubjectService]*/
})
export class AppComponent { }
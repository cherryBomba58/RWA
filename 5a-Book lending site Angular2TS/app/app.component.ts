import {Component} 		from 'angular2/core';
import {HTTP_PROVIDERS} 	from 'angular2/http';

import {IndexComponent} 	from './index.component';
import {MyDataComponent} 	from './mydata.component';
import {OffersComponent} 	from './offers.component';
import {LoginComponent} 	from './login.component';
import {RegistComponent} 	from './regist.component';
/*import {SubjectService}	from './subject.service';*/

@Component({
    selector: 'my-app',
    template: '<regist></regist>',
    directives: [IndexComponent, MyDataComponent, OffersComponent, LoginComponent, RegistComponent],
    /*providers: [HTTP_PROVIDERS, SubjectService]*/
})
export class AppComponent { }
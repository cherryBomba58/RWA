import {Component} 				from 'angular2/core';
import {HTTP_PROVIDERS} 		from 'angular2/http';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import {IndexComponent} 		from './index.component';
import {MyDataComponent} 		from './mydata.component';
import {OffersComponent} 		from './offers.component';
import {LoginComponent} 		from './login.component';
import {RegistComponent} 		from './regist.component';
import {LoginService}			from './login.service';
import {MyDataService}			from './mydata.service';
import {OffersService}			from './offers.service';
import {RegistService}			from './regist.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/public/navigation.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS, HTTP_PROVIDERS,
    			LoginService, MyDataService, OffersService, RegistService]
})

@RouteConfig([
  {
    path: '/index',
    name: 'Index',
    component: IndexComponent,
    useAsDefault: true
  },
  {
    path: '/mydata',
    name: 'MyData',
    component: MyDataComponent
  },
  {
    path: '/offers',
    name: 'Offers',
    component: OffersComponent
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginComponent
  },
  {
    path: '/regist',
    name: 'Regist',
    component: RegistComponent
  }
])

export class AppComponent {}
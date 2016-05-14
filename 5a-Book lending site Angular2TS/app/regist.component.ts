import {Component}		 	from 'angular2/core';
import {RegistService} 		from './regist.service';

import {User} 				from './user';

@Component({
  selector: 'regist',
  viewProviders: [RegistService],
  templateUrl: 'app/public/regist.html'
})

// postolni és validálni fog
export class RegistComponent {

  constructor(private registService: RegistService) {

  }

  users = [];

  validateRegist(username: string, email: string, place: string, password: string, password2: string) {
    if(password != password2) {
		alert('Nem egyenlő a két jelszó!');
	}
	else {
		var user = new User(username, email, place, password, 'AAAAAAAAA');
    	this.registService.postUser(user)
        		  			.subscribe(users => this.users = users);
		alert('Sikerült a regisztráció! (Bár egyelőre nem tudsz belépni)');
	}
  }
}
import {Component} 						from 'angular2/core';
import {LoginService} 					from './login.service';

import {User} 							from './user';

@Component({
  selector: 'login',
  viewProviders: [LoginService],
  templateUrl: 'app/public/login.html'
})

// gettelni fog és összehasonlítani, keresni
export class LoginComponent {

  constructor(private loginService: LoginService) {

  }

  pass = '';

  validateLogin(username: string, password: string) {
    this.loginService.getPass(username)
    			  .subscribe(users => this.pass = users[0].password);
    this.validate(username, password);
  }
  
  validate(username: string, password: string) {
    var auth = false;
    console.log(this.pass);
    console.log(password);
    
	if (this.pass == password) {
		auth = true;
	}
	
    if(auth==false) {
    	alert('Nem sikerült a bejelentkezés!');
    }
    else {
		alert('Sikerült a bejelentkezés!');
    }
  }
}
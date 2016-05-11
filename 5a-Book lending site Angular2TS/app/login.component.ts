import {Component} 	from 'angular2/core';
/*import {Book} 			from './book';*/
import {User} 			from './user';
/*import {Offer} 			from './offer';
import {SubjectService} 	from './subject.service';*/

@Component({
  selector: 'login',
  /*viewProviders: [SubjectService],*/
  templateUrl: 'app/public/login.html'
})

// gettelni fog �s �sszehasonl�tani, keresni
export class LoginComponent {

  users = [ new User('valaki','valaki@valaki.hu','valahol','probajelszo','proba1'),
  	    new User('masvalaki','masvalaki@masvalaki.hu','mashol','masikproba','proba2'),
  	    new User('bonbon','bonbon@bonbonetti.hu','mittudomenhol','megegyproba','proba3')
  ]

  validateLogin(username: string, password: string) {
    var auth = false;
    for (var i=0; i<this.users.length; i++) {
		if (this.users[i].username == username && this.users[i].password == password) {
			auth = true;
		}
    }
    if(auth==false) {
    	alert('Nem siker�lt a bejelentkez�s!');
    }
    else {
		alert('Siker�lt a bejelentkez�s!');
    }
  }
  getRows() {
    /*// here we get all the subjects from database
    this.subjectService.getSubjects()
    			  .subscribe(subjects => this.subjects = subjects);*/
  }
}
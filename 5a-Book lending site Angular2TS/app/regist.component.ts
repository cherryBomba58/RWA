import {Component}		 	from 'angular2/core';
/*import {Book} 			from './book';*/
import {User} 				from './user';
/*import {Offer} 				from './offer';
import {SubjectService} 	from './subject.service';*/

@Component({
  selector: 'regist',
  /*viewProviders: [SubjectService],*/
  templateUrl: 'app/public/regist.html'
})

// postolni és validálni fog
export class RegistComponent {

  users = [ new User('valaki','valaki@valaki.hu','valahol','probajelszo','proba1'),
  	    new User('masvalaki','masvalaki@masvalaki.hu','mashol','masikproba','proba2'),
  	    new User('bonbon','bonbon@bonbonetti.hu','mittudomenhol','megegyproba','proba3')
  ]

  validateRegist(username: string, email: string, place: string, password: string, password2: string) {
    if(password != password2) {
		alert('Nem egyenlő a két jelszó!');
	}
	else {
		this.users.push(new User(username, email, place, password, 'AAAAAAAAAAAAAAA'));
		alert('Sikerült a regisztráció! (Bár egyelőre nem tudsz belépni)');
	}
  }
  /*addRow(code: string, name: string, credit: number, teacher: string) {
    // here we insert row to table
    var sub = new Subject(code, name, credit, teacher);
    this.subjectService.postSubject(sub)
        		  .subscribe(subjects => this.subjects = subjects);
  }*/
}
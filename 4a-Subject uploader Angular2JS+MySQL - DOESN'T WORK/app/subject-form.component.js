// import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';
(function(app) {
  app.SubjectFormComponent = ng.core
    .Component({
      selector: 'subject-form',
      /*viewProviders: [HTTP_PROVIDERS],*/
      templateUrl: 'app/subject-form.component.html'
    })
    //@Injectable()
    .Class({
      constructor: function() {	// http
        this.subjects = [];
        // here we select the data from table
        /*http.get('/api/subjects')
        	.map(res => res.json())
        	.subscribe(subjects => this.subjects = subjects);*/
      },
      addRow: function(code, name, credit, teacher) {
        // here we insert row to table
        /*var header = new Headers();
        headers.append("Content-Type", "application/json");
        http.post('/api/subjects', {"code": code, "name": name, "credit": credit,
        "teacher": teacher}, {"headers": headers})
        	.map(res => res.json())
        	.subscribe(subjects => this.subjects = subjects);*/
      },
      modRow: function(code, name, credit, teacher, scode) {
		// here we update a row in table
		/*var header = new Headers();
        headers.append("Content-Type", "application/json");
		http.put('/api/subjects/${scode}', {"code": code, "name": name, "credit": credit,
		"teacher": teacher}, {"headers": headers})
        	.map(res => res.json())
        	.subscribe(subjects => this.subjects = subjects);*/
      },
	  delRow: function(code) {
		// here we delete a row in table
		/*http.delete('/api/subjects/${code}')
        	.map(res => res.json())
        	.subscribe(subjects => this.subjects = subjects);*/
      }
    });
})(window.app || (window.app = {}));
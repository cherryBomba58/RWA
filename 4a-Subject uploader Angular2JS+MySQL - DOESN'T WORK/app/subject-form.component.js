// import {Http, Headers, HTTP_PROVIDERS} from 'angular2/http';		// Javascript doesn't know import
(function(app) {
  app.SubjectFormComponent = ng.core								// Javascript doesn't know another packages outside ng.Core
    .Component({
      selector: 'subject-form',
      /*viewProviders: [HTTP_PROVIDERS],*/							// Javascript doesn't know this because no HTTP imported
      templateUrl: 'app/subject-form.component.html'
    })			   													// Javascript needs injection but doesn't have a tool to it
    //@Injectable()													// Javascript doesn't know annotation
    .Class({
      constructor: function() {										// HTTP should be here as parameter but AngularJS doesn't know it without an import
        this.subjects = [];
        // here we select the data from table
        /*http.get('/api/subjects')									// No HTTP, no HTTP requests or responses
        	.map(res => res.json())
        	.subscribe(subjects => this.subjects = subjects);*/
      },
      addRow: function(code, name, credit, teacher) {
        // here we insert row to table
        /*var header = new Headers();								// No HTTP, no headers, AngularJS2 isn't even documented really -> we need TypeScript
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
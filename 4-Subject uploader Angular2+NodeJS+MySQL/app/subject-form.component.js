(function(app) {
  app.SubjectFormComponent = ng.core
    .Component({
      selector: 'subject-form',
      templateUrl: 'app/subject-form.component.html'
    })
    .Class({
      constructor: function() {
        this.subjects = [];
        // here we select the data from table
        for(var i=0; i<rows.length; i++) {
			this.subjects.push(new app.Subject(rows[i].code, rows[i].name,
			rows[i].credit, rows[i].teacher));
		};
      },
      addRow: function(code, name, credit, teacher) {
        // here we insert row to table
      },
      modRow: function(code, name, credit, teacher, scode) {
		// here we update a row in table
      },
	  delRow: function(code) {
		// here we delete a row in table
      }
    });
})(window.app || (window.app = {}));
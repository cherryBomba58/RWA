﻿(function(app) {
  app.SubjectFormComponent = ng.core
    .Component({
      selector: 'subject-form',
      templateUrl: 'app/subject-form.component.html'
    })
    .Class({
      constructor: function() {
        this.subjects = [
        	new app.Subject('BMEVIAUA300', 'Önálló laboratórium', '6', 'Gipsz Jakab'), 
        	new app.Subject('BMEVIAUA350', 'Informatikai technológiák', '2', 'Tóth László'), 
        	new app.Subject('BMEVIAUA360', 'Adatvezérelt alkalmazások', '4', 'Szabó Zoltán'), 
        	new app.Subject('RXFVKBTA270', 'Bűbájtan', '2', 'Perseus Piton'), 
        	new app.Subject('HRVBKRTA120', 'Történelem', '5', 'ifj. Henry Jones')
        ];
      },
      addRow: function(code, name, credit, teacher) {
        this.subjects.push(new app.Subject(code, name, credit, teacher));
      }
    });
})(window.app || (window.app = {}));
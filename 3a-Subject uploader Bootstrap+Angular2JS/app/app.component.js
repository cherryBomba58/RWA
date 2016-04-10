(function(app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<subject-form></subject-form>',
      directives: [app.SubjectFormComponent]
    })
    .Class({
      constructor: function() {}
    });
})(window.app || (window.app = {}));
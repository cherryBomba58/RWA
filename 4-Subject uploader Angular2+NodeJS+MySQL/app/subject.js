(function(app) {
  app.Subject = Subject;
  function Subject(code, name, credit, teacher) {
    this.code = code;
    this.name = name;
    this.credit = credit;
    this.teacher = teacher;
  }
})(window.app || (window.app = {}));
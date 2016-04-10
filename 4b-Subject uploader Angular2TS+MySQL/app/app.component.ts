import {Component} 		from 'angular2/core';
import {SubjectFormComponent}   from './subject-form.component';

@Component({
    selector: 'my-app',
    template: '<subject-form></subject-form>',
    directives: [SubjectFormComponent]
})
export class AppComponent { }
import {Component} 		from 'angular2/core';
import {HTTP_PROVIDERS} 	from 'angular2/http';

import {Subject} 		from './subject';
import {SubjectFormComponent} 	from './subject-form.component';
import {SubjectService}		from './subject.service';

@Component({
    selector: 'my-app',
    template: '<subject-form></subject-form>',
    directives: [SubjectFormComponent],
    providers: [HTTP_PROVIDERS, SubjectService]
})
export class AppComponent { }
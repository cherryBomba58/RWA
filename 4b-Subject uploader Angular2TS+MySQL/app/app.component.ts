import {Component} 		from 'angular2/core';

import {Subject} 		from './subject';
import {SubjectFormComponent} 	from './subject-form.component';
import {SubjectRESTClient}	from './subject-RESTClient';

@Component({
    selector: 'my-app',
    template: '<subject-form></subject-form>',
    directives: [SubjectFormComponent],
    providers: [SubjectRESTClient]
})
export class AppComponent { }
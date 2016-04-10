import {Component} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import { Subject } from './subject';

@Component({
  selector: 'subject-form',
  templateUrl: 'app/subject-form.component.html'
})

export class SubjectFormComponent {
  subjects = [];
  addRow(code: string, name: string, credit: number, teacher: string) {
    this.subjects.push(new Subject(code, name, credit, teacher));
  }
  modRow(code: string, name: string, credit: number, teacher: string, scode: string) {

  }
  delRow(scode: string) {

  }
}
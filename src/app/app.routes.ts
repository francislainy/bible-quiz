import {Routes} from '@angular/router';
import {SubjectListComponent} from './components/subject-list/subject-list.component';
import {SubjectComponent} from './components/subject/subject.component';
import {InnerSubjectListComponent} from './components/inner-subject-list/inner-subject-list.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'subjects'},
  {path: 'subjects', component: SubjectListComponent},
  {path: 'subjects/:parent-id/inner-subjects', component: InnerSubjectListComponent},
  {path: 'subjects/:parent-id/inner-subjects/:inner-subject-id', component: SubjectComponent},
];

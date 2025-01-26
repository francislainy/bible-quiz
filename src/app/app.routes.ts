import { Routes } from '@angular/router';
import {SubjectListComponent} from './components/subject-list/subject-list.component';
import {SubjectComponent} from './components/subject/subject.component';

export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'subjects'},
  {path: 'subjects', component: SubjectListComponent},
  {path: 'subject/:id', component: SubjectComponent},
];

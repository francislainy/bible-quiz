import {bootstrapApplication} from '@angular/platform-browser';
import {AppComponent} from './app/app.component';
import {SubjectListComponent} from './app/components/subject-list/subject-list.component';
import {SubjectComponent} from './app/components/subject/subject.component';
import {provideRouter, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'subjects'},
  {path: 'subjects', component: SubjectListComponent},
  {path: 'subject/:id', component: SubjectComponent},
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {SubjectListComponent} from './components/subject-list/subject-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'bible-quiz';
}

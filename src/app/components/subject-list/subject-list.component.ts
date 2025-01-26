import {Component} from '@angular/core';
import {NgForOf} from '@angular/common';
import {ISubject} from '../../models/ISubject';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-subject-list',
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent {
  subjects: ISubject[] = [
    {id: 1, name: 'Bible books'},
    {id: 2, name: 'Bible Characters'},
    {id: 3, name: 'JW organisation'},
  ];
}

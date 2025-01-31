import {Component, OnInit} from '@angular/core';
import {NgForOf} from '@angular/common';
import {ISubject} from '../../models/ISubject';
import {RouterLink} from '@angular/router';
import {SubjectsService} from '../../services/subjects.service';

@Component({
  selector: 'app-subject-list',
  imports: [
    NgForOf,
    RouterLink
  ],
  templateUrl: './subject-list.component.html',
  styleUrl: './subject-list.component.css'
})
export class SubjectListComponent implements OnInit {
  subjects: ISubject[] = [];
  constructor(private subjectService: SubjectsService) {}

  ngOnInit() {
    this.subjectService.getSubjects().subscribe({
      next: (data) => {
        console.log('Fetched subjects:', data);
        this.subjects = data;
      },
      error: (err) => console.error('Error fetching subjects:', err)
    });
  }
}

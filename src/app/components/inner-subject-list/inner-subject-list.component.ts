import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {ISubject} from '../../models/ISubject';
import {NgForOf} from '@angular/common';
import {SubjectsService} from '../../services/subjects.service';

@Component({
  selector: 'app-inner-subject-list',
  templateUrl: './inner-subject-list.component.html',
  imports: [
    RouterLink,
    NgForOf
  ],
  styleUrls: ['./inner-subject-list.component.css']
})
export class InnerSubjectListComponent implements OnInit {
  allSubjects: ISubject[] = [];
  filteredSubjects: ISubject[] = [];

  constructor(private subjectService: SubjectsService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.subjectService.getSubjects().subscribe({
      next: (data) => {
        this.allSubjects = data;
        // Get the parentId from the route
        this.route.paramMap.subscribe((params) => {
          const parentId = Number(params.get('parent-id'));
          this.filteredSubjects = this.allSubjects.filter(
            (subject) => subject.parentId === parentId
          );
        });
      },
      error: (err) => console.error('Error fetching subjects:', err)
    })
  }
}

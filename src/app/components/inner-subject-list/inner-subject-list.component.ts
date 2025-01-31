import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ISubject } from '../../models/ISubject';
import {NgForOf, NgIf} from '@angular/common';
import { SubjectsService } from '../../services/subjects.service';

@Component({
  selector: 'app-inner-subject-list',
  templateUrl: './inner-subject-list.component.html',
  imports: [
    RouterLink,
    NgForOf,
    NgIf
  ],
  styleUrls: ['./inner-subject-list.component.css']
})
export class InnerSubjectListComponent implements OnInit {
  allSubjects: ISubject[] = [];
  filteredSubjects: ISubject[] = [];

  constructor(private subjectService: SubjectsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const parentId = params.get('parent-id') ? Number(params.get('parent-id')) : null;

      this.subjectService.getSubjects().subscribe({
        next: (data) => {
          this.allSubjects = data;

          // Find the parent subject
          const parentSubject = data.find(subject => subject.id === parentId);

          // If parent subject exists and has children, use its children
          this.filteredSubjects = parentSubject && parentSubject.children
            ? parentSubject.children
            : [];
        },
        error: (err) => console.error('Error fetching subjects:', err)
      });
    });
  }
}

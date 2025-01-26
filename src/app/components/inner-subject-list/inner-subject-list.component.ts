import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { ISubject } from '../../models/ISubject';
import {NgForOf} from '@angular/common';

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
  allSubjects: ISubject[] = [
    { id: 1, parentId: 1, name: 'Genesis' },
    { id: 2, parentId: 1, name: 'Exodus' },
    { id: 3, parentId: 1, name: 'Numbers' },
    { id: 4, parentId: 2, name: 'Joseph' },
  ];

  filteredSubjects: ISubject[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Get the parentId from the route
    this.route.paramMap.subscribe((params) => {
      const parentId = Number(params.get('subjectId'));
      this.filteredSubjects = this.allSubjects.filter(
        (subject) => subject.parentId === parentId
      );
    });
  }
}

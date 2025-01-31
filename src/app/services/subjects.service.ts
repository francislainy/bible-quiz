import {DOCUMENT} from '@angular/common';
import {Inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ISubject} from '../models/ISubject';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  private subjectsUrl = 'bible-quiz/subjects.json';

  constructor(private http: HttpClient, @Inject(DOCUMENT) private document: Document) {
  }

  getSubjects(): Observable<ISubject[]> {
    return this.http.get<ISubject[]>(this.subjectsUrl);
  }
}

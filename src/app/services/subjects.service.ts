import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ISubject} from '../models/ISubject';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  private subjectsUrl = '/subjects.json';

  constructor(private http: HttpClient) {
  }

  getSubjects(): Observable<ISubject[]> {
    return this.http.get<ISubject[]>(this.subjectsUrl);
  }
}

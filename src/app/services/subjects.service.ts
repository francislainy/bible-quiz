import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ISubject} from '../models/ISubject';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  private subjectsUrl = environment.apiUrl + 'subjects.json';

  constructor(private http: HttpClient) {
  }

  getSubjects(): Observable<ISubject[]> {
    return this.http.get<ISubject[]>(this.subjectsUrl);
  }
}


// ng build --output-path docs --base-href /bible-quiz/ && mv docs/browser/* docs/ && rmdir docs/browser


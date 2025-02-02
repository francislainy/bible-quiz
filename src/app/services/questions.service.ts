import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ISubjectQuestions} from '../models/IQuestion';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private questionsUrl = environment.apiUrl + 'questions.json';

  constructor(private http: HttpClient) {
  }

  getQuestions(): Observable<ISubjectQuestions[]> {
    return this.http.get<ISubjectQuestions[]>(this.questionsUrl);
  }
}

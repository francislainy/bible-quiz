import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IQuestions} from '../models/IQuestion';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  private questionsUrl = '/questions.json';

  constructor(private http: HttpClient) {
  }

  getQuestions(): Observable<IQuestions[]> {
    return this.http.get<IQuestions[]>(this.questionsUrl);
  }
}

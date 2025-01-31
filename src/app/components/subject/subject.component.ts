import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { QuestionsService } from '../../services/questions.service';
import { IQuestion, ISubjectQuestions } from '../../models/IQuestion';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  imports: [
    NgIf,
    RouterLink
  ],
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  parentId!: number;
  subjectId!: number;

  questions: IQuestion[] = [];
  currentQuestionIndex = 0;
  showAnswer = false;
  score = 0;

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionsService
  ) {}

  ngOnInit() {
    this.parentId = +this.route.snapshot.paramMap.get('parent-id')!;
    this.subjectId = +this.route.snapshot.paramMap.get('inner-subject-id')!;

    this.questionService.getQuestions().subscribe({
      next: (data: ISubjectQuestions[]) => {
        const subjectQuestions = data.find(
          sq => sq.parentId === this.parentId && sq.subjectId === this.subjectId
        );

        this.questions = subjectQuestions ? subjectQuestions.questions : [];
      },
      error: (err) => console.error('Error fetching questions:', err)
    });
  }

  getCurrentQuestion(): IQuestion | null {
    return this.questions[this.currentQuestionIndex] || null;
  }

  revealAnswer() {
    this.showAnswer = true;
  }

  markAsCorrect() {
    this.score++;
    this.showAnswer = false;
    this.moveToNextQuestion();
  }

  moveToNextQuestion() {
    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
      this.showAnswer = false;
    }
  }

  moveToPreviousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.currentQuestionIndex--;
      this.showAnswer = false;
    }
  }
}

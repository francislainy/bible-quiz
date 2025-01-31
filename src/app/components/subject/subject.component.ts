import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { QuestionsService } from '../../services/questions.service';
import { IQuestion, ISubjectQuestions } from '../../models/IQuestion';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  imports: [
    NgIf,
    RouterLink,
    NgClass
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
    this.showAnswer = !this.showAnswer;
  }

  markAsCorrect() {
    const currentQuestion = this.getCurrentQuestion();
    if (currentQuestion && !currentQuestion.markedAsCorrect) {
      this.score++;
      currentQuestion.markedAsCorrect = true;
    }
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

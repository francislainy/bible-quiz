import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {QuestionsService} from '../../services/questions.service';
import {IQuestions} from '../../models/IQuestion';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  parentId!: number;
  subjectId!: number;

  allQuestions: IQuestions[] = [];
  filteredQuestions: IQuestions[] = [];

  constructor(
    private route: ActivatedRoute,
    private questionService: QuestionsService
  ) {
  }

  ngOnInit() {
    // Retrieve route parameters
    this.parentId = +this.route.snapshot.paramMap.get('parent-id')!;
    this.subjectId = +this.route.snapshot.paramMap.get('inner-subject-id')!;

    this.questionService.getQuestions().subscribe({
      next: (data) => {
        console.log('Fetched questions:', data);
        this.allQuestions = data;

        // Filter questions based on parentId and subjectId
        this.filteredQuestions = this.allQuestions.filter(
          (question) => question.parentId === this.parentId && question.subjectId === this.subjectId
        );
      },
      error: (err) => console.error('Error fetching questions:', err)
    });
  }
}

import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {QuestionsService} from '../../services/questions.service';
import {SubjectComponent} from './subject.component';
import {ISubjectQuestions} from '../../models/IQuestion';

describe('SubjectComponent', () => {
  let component: SubjectComponent;
  let fixture: ComponentFixture<SubjectComponent>;
  let mockQuestionsService: jasmine.SpyObj<QuestionsService>;
  let mockActivatedRoute: any;

  const mockQuestions: ISubjectQuestions[] = [
    {
      parentId: 1,
      subjectId: 1,
      questions: [
        {
          text: 'Question 1', answer: 'Answer 1', markedAsCorrect: false,
          id: 1
        },
        {
          text: 'Question 2', answer: 'Answer 2', markedAsCorrect: false,
          id: 2
        }
      ]
    }
  ];

  beforeEach(async () => {
    mockQuestionsService = jasmine.createSpyObj('QuestionsService', ['getQuestions']);
    mockQuestionsService.getQuestions.and.returnValue(of(mockQuestions));

    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: (key: string) => {
            if (key === 'parent-id') return '1';
            if (key === 'inner-subject-id') return '1';
            return null;
          }
        }
      }
    };

    await TestBed.configureTestingModule({
      declarations: [SubjectComponent],
      providers: [
        {provide: QuestionsService, useValue: mockQuestionsService},
        {provide: ActivatedRoute, useValue: mockActivatedRoute}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with questions', () => {
    expect(component.questions.length).toBe(2);
    expect(component.questions[0].text).toBe('Question 1');
  });

  it('should reveal the answer', () => {
    component.revealAnswer();
    expect(component.showAnswer).toBeTrue();
  });

  it('should mark a question as correct', () => {
    component.markAsCorrect();
    expect(component.questions[0].markedAsCorrect).toBeTrue();
    expect(component.score).toBe(1);
  });

  it('should navigate to the next question', () => {
    component.moveToNextQuestion();
    expect(component.currentQuestionIndex).toBe(1);
  });

  it('should navigate to the previous question', () => {
    component.moveToNextQuestion();
    component.moveToPreviousQuestion();
    expect(component.currentQuestionIndex).toBe(0);
  });

  it('should disable "Previous" button on the first question', () => {
    expect(component.currentQuestionIndex).toBe(0);
    const prevButton = fixture.nativeElement.querySelector('button[disabled]');
    expect(prevButton).toBeTruthy();
  });

  it('should disable "Next" button on the last question', () => {
    component.moveToNextQuestion();
    expect(component.currentQuestionIndex).toBe(1);
    const nextButton = fixture.nativeElement.querySelector('button[disabled]');
    expect(nextButton).toBeTruthy();
  });
});

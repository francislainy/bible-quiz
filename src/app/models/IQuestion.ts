export interface IQuestion {
  id: number;
  text: string;
  answer: string;
  markedAsCorrect?: boolean;
}

export interface ISubjectQuestions {
  subjectId: number;
  parentId: number;
  questions: IQuestion[];
}

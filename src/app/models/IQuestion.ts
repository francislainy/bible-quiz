export interface IQuestion {
  id: number;
  text: string;
  answer: string;
}

export interface ISubjectQuestions {
  subjectId: number;
  parentId: number;
  questions: IQuestion[];
}

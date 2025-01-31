export interface IQuestion {
  id: number;
  text: string;
  answer: string;
}

export interface IQuestions {
  parentId: number;
  subjectId: number;
  questions: IQuestion[];
}

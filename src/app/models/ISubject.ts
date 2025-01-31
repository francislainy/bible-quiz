export interface ISubject {
  id: number;
  parentId?: number;
  name: string;
  children?: ISubject[];
}

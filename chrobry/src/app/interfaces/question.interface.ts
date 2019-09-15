export interface IQuestion {
  questionId: string;
  categories: Array<string>;
  difficulty: number;
  imgUrl: string;
  invoked: number;
  body: string;
  replyBody: string;
  succesRate: number;
  point: number;
  answers: Array<string>;
}

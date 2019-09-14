import { IAnswer } from '@app/interfaces/answer.interface';
import { ILabel } from '@app/interfaces/label.interface';

export interface IQuestion {
  id: string;
  categoryId: string;
  label: ILabel;
  successRate: number;
  point: number;
  answers: Array<IAnswer>;
}

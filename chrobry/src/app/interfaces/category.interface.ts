import { ILabel } from '@app/interfaces/label.interface';

export interface ICategory {
  id: string;
  label: ILabel;
  successRate: number;
  questions: Array<string>;
}

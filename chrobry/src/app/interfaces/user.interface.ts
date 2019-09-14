import { Language } from '@app/config/global';
import { IScore } from '@app/interfaces/score.interface';

export interface IUser {
  id: string;
  lang: Language;
  firstName: string;
  middleName: string;
  surName: string;
  userName: string;
  email: string;
  pkpoints: number;
  highScores: Array<IScore>;
  highStreaks: Array<IScore>;
}

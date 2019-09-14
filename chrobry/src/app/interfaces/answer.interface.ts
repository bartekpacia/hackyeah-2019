import { SafeHtml, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

import { ILabel } from '@app/interfaces/label.interface';

export interface IAnswer {
  id: string;
  label?: ILabel;
}

export interface IAnswerInfo {
  id: string;
  answerId: string;
  label: ILabel;
  categoryId: string;
  imgUrl: SafeResourceUrl;
  linkUrl: SafeUrl;
  text: SafeHtml;
}

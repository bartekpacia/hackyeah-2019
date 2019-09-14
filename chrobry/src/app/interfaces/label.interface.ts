import { Language } from '@app/config/global';

export type ILabel = {
  [lang in Language]?: string;
};

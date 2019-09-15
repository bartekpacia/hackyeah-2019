import { IEnvironment } from '@env/environment.interface';

import { version } from '@package';

const baseHref = '/';

export const environment: IEnvironment = {
  api: 'https://hackyeah-2019.appspot.com/',
  baseHref,
  production: false,
  version,
};


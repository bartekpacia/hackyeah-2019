import { IEnvironment } from '@env/environment.interface';

import { version } from '@package';

const baseHref = '/';

export const environment: IEnvironment = {
  api: 'http://localhost:3000/',
  baseHref,
  production: true,
  version,
};

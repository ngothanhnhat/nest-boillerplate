import * as path from 'path';
import { HeaderResolver, I18nOptions } from 'nestjs-i18n';

export const I18nConfig: I18nOptions = {
  fallbackLanguage: 'en',
  loaderOptions: {
    path: path.join(__dirname, '..', '/i18n/'),
    watch: false,
  },
  resolvers: [new HeaderResolver(['lang'])],
};

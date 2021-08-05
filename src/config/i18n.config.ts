import * as path from 'path';
import { HeaderResolver, I18nJsonParser, I18nOptions } from 'nestjs-i18n';

export const I18nConfig: I18nOptions = {
  fallbackLanguage: 'en',
  parser: I18nJsonParser,
  parserOptions: {
    path: path.join(__dirname, '..', '/i18n/'),
    watch: true,
  },
  resolvers: [new HeaderResolver(['lang'])],
};

import { Injectable } from '@nestjs/common';
import { I18nRequestScopeService } from 'nestjs-i18n';

@Injectable()
export class AppService {
  constructor(private readonly i18n: I18nRequestScopeService){}
  getHello(): Promise<string> {
    return this.i18n.t('message.hello_world');
  }
}

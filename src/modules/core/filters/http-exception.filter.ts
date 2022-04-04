import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { I18nService } from 'nestjs-i18n';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  constructor(private i18n: I18nService) {}

  async catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const data = <any>exception.getResponse();

    if (typeof data.code === 'string') {
      const lang = ctx.getRequest().lang || 'en';
      const key = `error.${data.code}`;
      data.message = await this.i18n.translate(key, { lang }); // assets/i18n/{lang}/error.json
    }

    response.status(status).json(data);
  }
}

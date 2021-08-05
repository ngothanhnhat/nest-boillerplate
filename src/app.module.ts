import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { I18nModule } from 'nestjs-i18n';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { I18nConfig } from './config/i18n.config';
import { OrmConfig } from './config/orm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(OrmConfig),
    I18nModule.forRoot(I18nConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrmConfig } from './config/orm.config';

@Module({
  imports: [TypeOrmModule.forRoot(OrmConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

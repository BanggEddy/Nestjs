import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedService } from './shared/shared.service';
import { SharedModule } from './shared/shared.module';
import { LoggerMiddleware } from './logger/logger.middleware';
import { logger } from './logger/functionnal.middleware';

@Module({
  imports: [SharedModule],
  controllers: [AppController],
  providers: [AppService, SharedService],
  exports: [AppService],
})
export class AppModule {
  constructor(
    private readonly sharedService: SharedService,
  ){
    console.log(this.sharedService.ident())
  }

  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes(
        { path: 'users', method: RequestMethod.GET },
        { path: 'users/(.*)', method: RequestMethod.GET },
      );
    consumer
      .apply(logger)
      .forRoutes(
        { path : 'users', method: RequestMethod.GET },
      )
  }
}

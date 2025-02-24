import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedService } from './shared/shared.service';
import { SharedModule } from './shared/shared.module';

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
}

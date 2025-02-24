import { Module } from '@nestjs/common';
import { AppModule } from '../app.module';
import { forwardRef } from '@nestjs/common';
import { PostsController } from 'src/ports/posts.controller';
import { PostsService } from 'src/ports/posts.service';
import { UserService } from 'src/user/user.service';
import { SharedService } from './shared.service';
import { UserController } from 'src/user/user.controller';

@Module({
  imports: [forwardRef(() => AppModule)],
  controllers: [PostsController, UserController],
  providers: [PostsService, UserService, SharedService],
})
export class SharedModule {
  constructor(
    private readonly userService: UserService,
    private readonly sharedService: SharedService
  ) {
    console.log(this.userService.ident())
    console.log(this.sharedService.ident())
  }
}
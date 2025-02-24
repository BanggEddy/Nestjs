import { Module } from '@nestjs/common';
import { PostsController,  } from './posts.controller';
import { AppModule } from '../app.module';
import { forwardRef } from '@nestjs/common';
import { PostsService } from './posts.service';

@Module({
  imports: [forwardRef(() => AppModule)],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
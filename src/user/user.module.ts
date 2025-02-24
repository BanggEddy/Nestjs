import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AppModule } from '../app.module';
import { forwardRef } from '@nestjs/common';

@Module({
  imports: [forwardRef(() => AppModule)],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}

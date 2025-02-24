import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from '../app.service';
import { UserService } from './user.service';
import { UserInterface } from '../models/user/user.interface';

@Controller()
export class UserController {
  constructor(
    private readonly appService: AppService, 
    private readonly userService: UserService 
  ) {}

  @Get('users')
  getAllUsers() : UserInterface[] {
    return this.userService.getAllUsers();  
  }

  @Get('users/create')
  createUser():void
  {
    this.userService.create({
      id:4,
      nom: 'nom4',
      prenom: 'prenom4',
      email: 'email4',
      mdp: 'mdp4',
    })
  }

  @Get('users/:id')
  getUserOne(@Param('id') id: string): UserInterface | undefined {
    console.log(id);
    return this.userService.getUserOne(parseInt(id));
  }
}

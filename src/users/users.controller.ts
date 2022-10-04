import { Body, Controller, Get, Post } from '@nestjs/common';
import { Observable } from 'rxjs';
import { IUser } from './models/users.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  createUser(@Body() user: IUser): Observable<IUser> {
    return this.userService.createUser(user);
  }

  @Get()
  getAllUsers(): Observable<IUser[]> {
    return this.userService.getAllUsers();
  }
}

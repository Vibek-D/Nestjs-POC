import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
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

  @Put(':id')
  updateUser(
    @Param('id') id: number,
    @Body() user: IUser,
  ): Observable<UpdateResult> {
    return this.userService.updateUser(id, user);
  }

  @Delete(':id')
  deleteUser(@Param('id', ParseIntPipe) id: number): Observable<DeleteResult> {
    return this.userService.deleteUser(id);
  }
}

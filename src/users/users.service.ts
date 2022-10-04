import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
import { UserEntity } from './models/users.entity';
import { IUser } from './models/users.interface';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  createUser(user: IUser): Observable<IUser> {
    return from(this.userRepository.save(user));
  }

  getAllUsers(): Observable<IUser[]> {
    return from(this.userRepository.find());
  }

  updateUser(id: number, user: IUser): Observable<UpdateResult> {
    return from(this.userRepository.update(id, user));
  }

  deleteUser(id: number): Observable<DeleteResult> {
    return from(this.userRepository.delete(id));
  }
}

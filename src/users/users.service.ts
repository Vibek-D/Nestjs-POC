import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { from, Observable } from 'rxjs';
import { Repository } from 'typeorm';
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
}

import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {User} from "./user.entity";
import {Connection, getConnection, Repository} from "typeorm";
import {UserDto} from "./user.dto";
import {Message} from "../message/message.entity";

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private usersRepository: Repository<User>, private connection : Connection) {}

    findAll(): Promise<User[]> {
        return this.usersRepository.find();
    }

    findOne(id: string): Promise<User> {
        return this.usersRepository.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.usersRepository.delete(id);
    }

    createUser(userDto: UserDto) {
        return  this.usersRepository.save(userDto);
    }

}
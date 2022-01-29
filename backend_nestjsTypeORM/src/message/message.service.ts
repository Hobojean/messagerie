import {Body, Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Connection, getConnection, Repository} from "typeorm";
import {MessageRepository} from './message.repository'
import {MessageDto} from "./message.dto";
import {Message} from "./message.entity";

@Injectable()
export class MessageService {
    constructor( @InjectRepository(MessageRepository) private readonly messageRepository: MessageRepository, private connection : Connection) {}

   async findById(id: string) {
      return this.messageRepository.find({id: Number(id)});
    }

    async createMessage(id: string, messageDto: MessageDto) {
        return this.messageRepository.createMessage(messageDto, id)
    }
}

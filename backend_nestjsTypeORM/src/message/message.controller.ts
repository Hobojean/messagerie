import {Body, Controller, Get, Param, Post, Req} from '@nestjs/common';
import {MessageService} from "./message.service";
import {MessageDto} from "./message.dto";
import {Message} from "./message.entity";

@Controller('message')
export class MessageController {
    constructor(private messageService : MessageService) {}

    @Get(':id')
    async   findById(id: string): Promise<Message[]> {
      const messages =await this.messageService.findById(id);
       return messages;
    }

    @Post(':id')
    create(@Param('id') id:string, @Body() messageDto : MessageDto) {
        const message =  this.messageService.createMessage( id, messageDto)
        return message
    }
}

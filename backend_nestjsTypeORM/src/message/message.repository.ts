import {EntityRepository, getConnection, Repository} from 'typeorm';
import {Message} from "./message.entity";
import {MessageDto} from "./message.dto";


@EntityRepository(Message)
export class MessageRepository extends Repository<Message> {
    createMessage = async (messageDto: MessageDto, id: string) => {
         return  await getConnection()
                .createQueryBuilder()
                .insert()
                .into(Message)
                .values([ {
                    content:messageDto.content,
                    userId: Number(id)
                }]) .execute();
        }
}
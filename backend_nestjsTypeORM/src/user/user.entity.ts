import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {Message} from "../message/message.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:50, unique:true})
    name: string;

    @OneToMany(type => Message, message=> message.user) message:Message[];
}
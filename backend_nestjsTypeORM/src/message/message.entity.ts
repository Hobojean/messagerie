import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn} from 'typeorm';
import {User} from "../user/user.entity";

@Entity()
export class Message {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    content: string;

    @Column("int", { name: "userId" }) userId: number;

    @CreateDateColumn()
    created_at: Date;

    @ManyToOne(type => User, user => user.message) user:User;
}
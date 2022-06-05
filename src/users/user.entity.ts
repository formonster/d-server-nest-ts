import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    head: string;

    @Column()
    account: string;

    @Column()
    password: string;

    @Column()
    createTime: number;

    @Column()
    isDelete: boolean;

    @Column({ default: false })
    isSuper: boolean;

    @Column({ default: true })
    isActive: boolean;
}
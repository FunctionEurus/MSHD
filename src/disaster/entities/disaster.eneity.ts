import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() // sql table === 'code'
export class Code {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    location: string;

    @Column()
    time: string;

    @Column()
    source: string;

    @Column()
    carrier: string;

    @Column()
    disaster: string;
}
import { Bunch } from 'src/bunches/entities/bunch.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('flowers')
export class Flower {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column({ default: 0 })
  price: number;

  @Column()
  name: string;

  @ManyToOne(() => Bunch, (bunch) => bunch.flowers)
  @JoinColumn({ name: 'bunchId' })
  @Column()
  bunchId: number;
}

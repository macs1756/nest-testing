import { Injectable } from '@nestjs/common';
import { CreateFlowerDto } from './dto/create-flower.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Flower } from './entities/flower.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FlowersService {
  constructor(
    @InjectRepository(Flower)
    private flowerRepository: Repository<Flower>,
  ) {}

  create(createFlowerDto: CreateFlowerDto): Promise<Flower> {
    const flower = this.flowerRepository.create(createFlowerDto);
    return this.flowerRepository.save(flower);
  }
}

// findAll() {
//   return `This action returns all flowers`;
// }

// findOne(id: number) {
//   return `This action returns a #${id} flower`;
// }

// update(id: number, updateFlowerDto: UpdateFlowerDto) {
//   return `This action updates a #${id} flower`;
// }

// remove(id: number) {
//   return `This action removes a #${id} flower`;
// }
//}

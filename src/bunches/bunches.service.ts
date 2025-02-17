import { Injectable } from '@nestjs/common';
import { CreateBunchDto } from './dto/create-bunch.dto';
import { UpdateBunchDto } from './dto/update-bunch.dto';

@Injectable()
export class BunchesService {
  create(createBunchDto: CreateBunchDto) {
    return 'This action adds a new bunch';
  }

  findAll() {
    return `This action returns all bunches`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bunch`;
  }

  update(id: number, updateBunchDto: UpdateBunchDto) {
    return `This action updates a #${id} bunch`;
  }

  remove(id: number) {
    return `This action removes a #${id} bunch`;
  }
}

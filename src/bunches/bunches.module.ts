import { Module } from '@nestjs/common';
import { BunchesService } from './bunches.service';
import { BunchesController } from './bunches.controller';

@Module({
  controllers: [BunchesController],
  providers: [BunchesService],
})
export class BunchesModule {}

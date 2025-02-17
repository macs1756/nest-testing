import { Test, TestingModule } from '@nestjs/testing';
import { BunchesController } from './bunches.controller';
import { BunchesService } from './bunches.service';

describe('BunchesController', () => {
  let controller: BunchesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BunchesController],
      providers: [BunchesService],
    }).compile();

    controller = module.get<BunchesController>(BunchesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

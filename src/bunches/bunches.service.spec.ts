import { Test, TestingModule } from '@nestjs/testing';
import { BunchesService } from './bunches.service';

describe('BunchesService', () => {
  let service: BunchesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BunchesService],
    }).compile();

    service = module.get<BunchesService>(BunchesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

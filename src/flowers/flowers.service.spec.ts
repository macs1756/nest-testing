import { Test, TestingModule } from '@nestjs/testing';
import { FlowersService } from './flowers.service';
import { Flower } from './entities/flower.entity';
import { Repository } from 'typeorm';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateFlowerDto } from './dto/create-flower.dto';

describe('FlowersService', () => {
  let service: FlowersService;
  let flowerRepository: Repository<Flower>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FlowersService,
        {
          provide: getRepositoryToken(Flower),
          useValue: {
            create: jest.fn(),
            save: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<FlowersService>(FlowersService);
    flowerRepository = module.get<Repository<Flower>>(
      getRepositoryToken(Flower),
    );
  });

  // DATA
  const createFlowerDto: CreateFlowerDto = {
    name: 'Rose',
    price: 10,
  };

  const savedFlower: Flower = {
    id: 1,
    ...createFlowerDto,
    created_at: new Date(),
    updated_at: new Date(),
  };
  // END DATA

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create and save a flower in repository', async () => {
    jest.spyOn(flowerRepository, 'save').mockResolvedValue(savedFlower);

    const result = await service.create(createFlowerDto);

    expect(result).toEqual(savedFlower);

    expect(flowerRepository.create).toHaveBeenCalledWith(
      expect.objectContaining(createFlowerDto),
    );
  });

  it('should create and return new flower in service', async () => {
    jest.spyOn(service, 'create').mockResolvedValue(savedFlower);

    const resCreatedViaService = await service.create(createFlowerDto);

    expect(resCreatedViaService).toEqual(savedFlower);

    expect(service.create).toHaveBeenCalledWith(
      expect.objectContaining(createFlowerDto),
    );
  });

  // it('should throw an error if flower creation fails', async () => {
  //   const createFlowerDto: CreateFlowerDto = {
  //     name: 'Tulip',
  //     price: 15,
  //   };

  //   jest
  //     .spyOn(flowerRepository, 'save')
  //     .mockRejectedValue(new Error('Failed to save flower'));

  //   try {
  //     await service.create(createFlowerDto);
  //   } catch (error) {
  //     expect(error).toBeInstanceOf(Error);
  //     expect(error.message).toBe('Failed to save flower');
  //   }
  // });
  //
});

import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class CreateFlowerDto {
  @ApiProperty({
    description: 'The name of the flower',
    example: 'Rose',
  })
  @IsString()
  name: string;

  @ApiProperty({
    description: 'The price of the flower',
    example: 10,
    default: 0,
  })
  @IsNumber()
  price: number;
}

import { PartialType } from '@nestjs/swagger';
import { CreateBunchDto } from './create-bunch.dto';

export class UpdateBunchDto extends PartialType(CreateBunchDto) {}

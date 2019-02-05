import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIntPipeCreated implements PipeTransform<string, number> {
  transform(value: string, metadata: ArgumentMetadata): number {
    const val = parseInt(value,10);
    if(isNaN(val)) {
      throw new BadRequestException('Please Input the Value Correctly');
    }
    return val;
  }
}

import {Injectable} from '@nestjs/common';

@Injectable()
export class CatsService {
  private readonly cats: string[] = ['Tom', 'Bosco', 'Lava', 'Picollo'];

  add(name: string) {
    this.cats.push(name);
  }

  findAll(): string[] {
    return this.cats;
  }

  findOne(index: number): string {

    return this.cats[index];
  }

  update(id: number, name: string) {
    this.cats[id] = name;

  }

  remove(id: number){
    this.cats.splice(id,1);
    return 'Deleted';
  }

}

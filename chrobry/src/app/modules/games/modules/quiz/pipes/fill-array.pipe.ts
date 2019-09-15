import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fillArray'
})
export class FillArrayPipe implements PipeTransform {

  transform(fillCount: number): Array<number> {
    return [].constructor(fillCount);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySortBy',
  pure: false //apply this sort again if array orarguments change
})
export class ArraySortByPipe implements PipeTransform {

  transform(array: string[], propName: string): any {
    array.sort( (a: any, b: any) => {
      if(a[propName].toLowerCase() <  b[propName].toLowerCase()){
        return -1;
      } else if (a[propName].toLowerCase() > b[propName].toLowerCase()){
        return 1;
      }else{
        return 0;
      }
    })
    return array;
  }

}

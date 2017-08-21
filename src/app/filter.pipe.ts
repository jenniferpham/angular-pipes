import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false //when input or arguments change, pipe will also rerun if this pure property is false. It also costs a lot of memory/energy to do this.
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): any {
    if(value.length === 0){
      return value;
    }
    const resultArray = [];
    for (const item of value){
      if(item[propName] === filterString){
        resultArray.push(item)
      }
    }
    return resultArray;
  }

}

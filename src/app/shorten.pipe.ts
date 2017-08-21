import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'shorten' //name to use inside of the expression in html to use this pipe
})

export class ShortenPipe implements PipeTransform {
    transform(value: any, limit: number) { //first parameter is value you bring in, parameters after that are parameters fo your choice
        if(value.length > limit){
            return value.substr(0, limit) + '...';
        } else{
            return value;
        }
    }
}
import {Pipe , PipeTransform } from '@angular/core';

     @Pipe ({
    name:'order'
    })

    export class OrderByPipe implements PipeTransform{
    transform(value: any[], property: any,descending?: boolean): any {
    if (!value || value.length === 0) {
      return value;
    }

    value.sort((first: any, second: any): number => {
        return first[property] > second[property] ? 1 : -1;
    });

    if (descending) {
      return value.reverse();
    }
    if (property === 'date') {
      return value.reverse();
    }

    return value;
  }
}

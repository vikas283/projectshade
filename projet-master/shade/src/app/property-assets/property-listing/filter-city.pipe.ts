import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCity'
})
export class FilterCityPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args.length<=0){
      return value;
    }
    else if(args.length>=0){
      return value.filter(propObj=>propObj.city.includes(args));
    }
  }

}

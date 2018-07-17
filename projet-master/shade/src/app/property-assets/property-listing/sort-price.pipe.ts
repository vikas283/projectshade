import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPrice'
})
export class SortPricePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args==0){
      return value;}
    else if(args==1){
        return value.sort(this.decreasingSort('price'));
    }
    else if(args==2){
      return value.sort(this.increasingSort('price'));
    }
  }
  increasingSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return ((a,b)=> {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    });
}
 decreasingSort(property) {
  var sortOrder = 1;
  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }
  return ((a,b)=> {
      var result = (a[property] > b[property]) ? -1 : (a[property] < b[property]) ? 1 : 0;
      return result * sortOrder;
  });
}

}


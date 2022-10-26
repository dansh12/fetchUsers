import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<any>, filterName: string, attribute: string){
    return value.filter((item:any)=> {return item[attribute].toLowerCase().includes(filterName.toLowerCase())})
  }

}

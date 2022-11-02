import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: Array<any>, filterName: string){
    return value.filter((item:any)=> {return item['name'].toLowerCase().includes(filterName.toLowerCase())||
    item['username'].toLowerCase().includes(filterName.toLowerCase())||
    item['email'].toLowerCase().includes(filterName.toLowerCase())})
  }

}

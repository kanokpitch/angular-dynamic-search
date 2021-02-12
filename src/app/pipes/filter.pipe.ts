import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class FilterPipe implements PipeTransform {

  transform(datas: any[], searchWord: string): any {
    if (!datas || !searchWord) {
      return datas;
    }

    return datas.filter(item => item.toLowerCase().indexOf(searchWord.toLowerCase()) !== -1);
  }

}

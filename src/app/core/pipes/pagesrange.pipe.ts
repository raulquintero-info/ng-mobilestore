import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PagesrangePipe implements PipeTransform {

  transform(num: []) {
    // rawNum = rawNum.charAt(0) != 0 ? "0" + rawNum : "" + rawNum;
    // let num: string = rawNum.toString();
    let newNum: string ='';
    let newStr = "";
    let i = 0;



    return [1,2,3];
  }
}

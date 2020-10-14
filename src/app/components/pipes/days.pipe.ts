import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'days'
})
export class DaysPipe implements PipeTransform {
currentDate: number = new Date().getDate();
remainDate: number;
currentMonth: number = new Date().getMonth();
remainMonth: number;

  transform(value: any): any {
    this.currentDate = new Date().getDate();
    this.remainDate = new Date(value).getDate();
    let days = this.currentDate - this.remainDate;
    // if (this.currentMonth === 1 || this.currentMonth === 3 || this.currentMonth === 5 || this.currentMonth === 7 || this.currentMonth === 8 || this.currentMonth === 10 || this.currentMonth === 12){
    //   let daysremain = 31 - this.currentDate;
    // }
    // else if (this.currentMonth === 4 || this.currentMonth === 6 || this.currentMonth === 9 || this.currentMonth === 11){
    //   let daysremain = 30 - this.currentDate;
    // }
    // else {
    //   let daysremain = 29 - this.remainMonth;
    // }
    return days;
  }

}

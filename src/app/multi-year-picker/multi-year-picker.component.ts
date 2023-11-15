import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-year-picker',
  templateUrl: './multi-year-picker.component.html',
  styleUrls: ['./multi-year-picker.component.css'],
})
export class MultiYearPickerComponent implements OnInit {
  showWindow = true;
  years: number[] = [];
  slicedYears: number[];
  selectedYears: number[] = [];
  range = {
    start: 0,
    offset: 16,
  };
  date = new Date()


  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 3000; i++) {
      this.years.push(i);
    }
    this.range.start = this.years.indexOf(this.date.getFullYear())
    this.slicedYears = this.years.slice(
      this.range.start,
      this.range.start + this.range.offset
    );
  }

  toggleWindow() {
    this.range.start = this.years.indexOf(this.date.getFullYear())
    this.slicedYears = this.years.slice(
      this.range.start,
      this.range.start + this.range.offset
    );
    this.showWindow = !this.showWindow;
    console.log(this.years);
  }

  previous() {
    if (this.range.start > 0) {
      this.range.start -= this.range.offset;

      console.log(this.range);
      this.slicedYears = this.years.slice(
        this.range.start,
        this.range.start + this.range.offset
      );
    }
  }

  next() {
    if (this.range.start < this.years.length - 25) {
      (this.range.start += this.range.offset), console.log(this.range);
      this.slicedYears = this.years.slice(
        this.range.start,
        this.range.start + this.range.offset
      );
    }
  }

  select(year) {
    if (this.selectedYears.includes(year)) {
      this.selectedYears = this.selectedYears.filter((_year) => year !== _year);
    } else {
      this.selectedYears.push(year);
    }
    this.selectedYears.sort((a, b) => a - b)
    console.log(this.selectedYears)
  }
  
  getValue(){
    let yearsString = '';
    this.selectedYears.forEach(year => {
      yearsString += `${year}, `
    })
    return yearsString.slice(0, -2);
  }

}

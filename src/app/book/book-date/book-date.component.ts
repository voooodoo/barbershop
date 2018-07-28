import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { getLocaleDayNames } from '@angular/common';

@Component({
  selector: 'app-book-date',
  templateUrl: './book-date.component.html',
  styleUrls: ['./book-date.component.scss']
})
export class BookDateComponent implements OnInit {
   
  @Input() form: FormGroup;
  
  date = new Date();

  myFilter = (d: Date): boolean => {
    const day = d.getDate();
     //Prevent Saturday and Sunday from being selected.
    //return day !== 0;
    return day > this.date.getDate() - 1
  }
  constructor() { }

  ngOnInit() {
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Barber } from '../../classes/barber';

@Component({
  selector: 'app-book-barbers',
  templateUrl: './book-barbers.component.html',
  styleUrls: ['./book-barbers.component.scss']
})
export class BookBarbersComponent implements OnInit {

  @Input() item: Barber;
  @Input() form: FormGroup;
  constructor() { }

  ngOnInit() {
  }

}

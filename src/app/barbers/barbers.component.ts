import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Barber } from '../classes/barber';

@Component({
  selector: 'app-barbers',
  templateUrl: './barbers.component.html',
  styleUrls: ['./barbers.component.scss']
})
export class BarbersComponent implements OnInit {

  dataBarbers: Barber[];

  constructor(private data:DataService) { }

  ngOnInit() {
    this.dataBarbers = this.data.getDataBarbers()
  }

}

import { Component, OnInit } from '@angular/core';
import { Barbers } from './barbers.model';
import { BarbersDataService } from './barbers-data.service';

@Component({
  selector: 'app-barbers',
  templateUrl: './barbers.component.html',
  styleUrls: ['./barbers.component.scss'],
  providers:[BarbersDataService]
})
export class BarbersComponent implements OnInit {

  barbersData: Barbers[];

  constructor(private data: BarbersDataService) { }

  ngOnInit() {
    this.barbersData = this.data.getBarbersData()
  }

}

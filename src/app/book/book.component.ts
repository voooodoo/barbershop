import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BarberServicesService} from '../services/barber-services.service'
import { Services } from '../services/services.model';
import { BarbersDataService } from '../barbers/barbers-data.service';
import { Barbers } from '../barbers/barbers.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  checked = false;
  isLinear = false;
  serviceFormGroup: FormGroup;
  barbersFormGroup: FormGroup;
  dateFormGroup:FormGroup;
  
  dataServices:Services[];
  dataBarbers:Barbers[];

    constructor(private _formBuilder: FormBuilder,
    private dataServ: BarberServicesService,
    private dataBarb: BarbersDataService,
   ) {}
  

  ngOnInit() {
    
    this.dataServices = this.dataServ.getDataServices()
    this.dataBarbers = this.dataBarb.getBarbersData()
    
    let serviceFieldsCtrls = {};
    for (let item of this.dataServices) {
      serviceFieldsCtrls[item.title] = this._formBuilder.control('');
    }
    this.serviceFormGroup = this._formBuilder.group( serviceFieldsCtrls );
  
    this.barbersFormGroup = this._formBuilder.group({
      barberId: ['']
    });

    this.dateFormGroup = this._formBuilder.group({
      dateForm: [(new Date()).toISOString()]
    });
    
  }
  
  orderService() {
    console.log(this.serviceFormGroup);
    console.log(this.barbersFormGroup);
    console.log(this.dateFormGroup);
  }
}

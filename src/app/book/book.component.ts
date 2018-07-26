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
  
    /*let barberFieldsCtrls = {};
    for (let item of this.dataBarbers) {
      barberFieldsCtrls[item.name] = this._formBuilder.control('');
    }
    this.barbersFormGroup = this._formBuilder.group(barberFieldsCtrls);*/
    this.barbersFormGroup = this._formBuilder.group({
      barberId: ['', Validators.required]
    });
    console.log(this.barbersFormGroup);
  }
  
  onSubmit() {
    console.log(this.serviceFormGroup);
  }
}

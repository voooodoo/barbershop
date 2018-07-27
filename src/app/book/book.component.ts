import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BarberServicesService} from '../services/barber-services.service'
import { Services } from '../services/services.model';
import { BarbersDataService } from '../barbers/barbers-data.service';
import { Barbers } from '../barbers/barbers.model';
import { BookState} from './book-state.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  
  serviceFormGroup: FormGroup;
  barbersFormGroup: FormGroup;
  dateFormGroup:FormGroup;
  
  currentOrder:BookState;

  currentService:Number[];
  currentBarber:Number;
  currentDate:Date;

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
      dateForm: [(new Date())]
    });
    
  
  }
  selectedServices(serviceValue) {
    var services = [];
    for( let item in serviceValue) {
      if(serviceValue[item]) {
        for( let elem of this.dataServices) {
          if(elem.title === item ) {
            services.push(elem.id);    
          }
        }   
      }
    }
    return services;
  }
  

  orderService() {
    this.currentService = this.selectedServices(this.serviceFormGroup.value);
    this.currentBarber = this.barbersFormGroup.value.barberId;
    this.currentDate = this.dateFormGroup.value.dateForm;
    
    this.currentOrder = new BookState(this.currentService, this.currentBarber, this.currentDate)
    //console.log(this.serviceFormGroup);
    //console.log(this.barbersFormGroup);
    //console.log(this.dateFormGroup);
    //console.log(this.currentService);
    //console.log(this.currentBarber);
    console.log(this.currentOrder);
  }
}

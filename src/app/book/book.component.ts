import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BookState} from './book-state.model';

import { Service } from '../classes/service';
import { Barber } from '../classes/barber';

import { DataService } from '../data.service';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  dataServices:Service[];
  dataBarbers:Barber[];

  serviceFormGroup: FormGroup;
  barbersFormGroup: FormGroup;
  dateFormGroup:FormGroup;
  
  currentService:Number[];
  currentBarber:Number;
  currentDate:Date;
    
  constructor(private _formBuilder: FormBuilder,
    private data: DataService,
    private order: OrderService,
  ) {}
  
  ngOnInit() {
    
    this.dataServices = this.data.getDataServices()
    this.dataBarbers = this.data.getDataBarbers()
    
    let serviceFieldsCtrls = {};
    for (let item of this.dataServices) {
      serviceFieldsCtrls[item.title] = this._formBuilder.control('');
    }

    this.serviceFormGroup = this._formBuilder.group( serviceFieldsCtrls );
  
    this.barbersFormGroup = this._formBuilder.group({barberId: ['']});

    this.dateFormGroup = this._formBuilder.group({dateForm: [new Date()]});

    this.currentService = this.selectedServices(this.serviceFormGroup.value);
    this.currentBarber = this.barbersFormGroup.value;
    this.currentDate = this.dateFormGroup.value;
    this.order.createOrder(this.currentService, this.currentBarber, this.currentDate);
    
    this.serviceFormGroup.valueChanges.subscribe( value =>{
      this.order.setCurrentService(this.selectedServices(value));
    } )

    this.barbersFormGroup.valueChanges.subscribe( value =>{
      this.order.setCurrentBarber(value);
      console.log(value);
    } )
    this.dateFormGroup.valueChanges.subscribe( value =>{
      this.order.setCurrentDate(value);
    } )
    
  }

  selectedServices(serviceValue) {
    var services = [];
    for( let item in serviceValue) {
      if(serviceValue[item]) {
        for( let elem of this.dataServices) {
          if(elem.title === item ) {
            services.push(elem);    
          }
        }   
      }
    }
    return services;
  }
  
  changeOrder() {
    
  }

  orderService() {
    
    //console.log(this.serviceFormGroup);
    //console.log(this.barbersFormGroup);
    //console.log(this.dateFormGroup);
    //console.log(this.currentService);
    //console.log(this.currentBarber);
    console.log(this.currentService);
    console.log(this.order.getOrder());
  }
}

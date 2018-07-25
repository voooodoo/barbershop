import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { BarberServicesService} from '../services/barber-services.service'
import { Services } from '../services/services.model';


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  checked = false;
  isLinear = false;
  serviceFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  
  dataServices:Services[];

  constructor(private _formBuilder: FormBuilder,
    private dataServ: BarberServicesService,
   ) {}

  ngOnInit() {
    this.dataServices = this.dataServ.getDataServices()

    let serviceFieldsCtrls = {};
    
    for (let item of this.dataServices) {
      serviceFieldsCtrls[item.title] = this._formBuilder.control({ 
        
    });
      }
      
      this.serviceFormGroup = this._formBuilder.group( serviceFieldsCtrls );
  
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    
    console.log(this.dataServices)
  }
  
  onSubmit() {
    console.log(this.serviceFormGroup);
  }
}

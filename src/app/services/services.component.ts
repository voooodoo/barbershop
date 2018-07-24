import { Component, OnInit } from '@angular/core';
import { BarberServicesService} from './barber-services.service'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  providers: [BarberServicesService]
})
export class ServicesComponent implements OnInit {

  dataServices;

  constructor(private data: BarberServicesService) { }

  ngOnInit() {
    this.dataServices = this.data.getDataServices()
  }


}

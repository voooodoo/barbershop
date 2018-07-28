import { Component, OnInit } from '@angular/core';
import { Service } from '../classes/service';
import { DataService} from '../data.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  dataServices:Service[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.dataServices = this.data.getDataServices()
  }
}

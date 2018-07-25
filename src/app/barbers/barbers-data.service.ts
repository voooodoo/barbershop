import { Injectable } from '@angular/core';
import { Barbers } from './barbers.model';

@Injectable({
  providedIn: 'root'
})
export class BarbersDataService {

  barbersData: Barbers[] = [{
    "name": "ALISSA C.",
    "image":"./assets/img/barbers/Alissa.jpg",
    "bio":" bio"
  }]; 
  constructor() { 
  }
  getBarbersData() {
    return this.barbersData;
  }
}

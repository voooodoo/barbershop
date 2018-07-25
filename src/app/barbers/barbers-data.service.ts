import { Injectable } from '@angular/core';
import { Barbers } from './barbers.model';

@Injectable({
  providedIn: 'root'
})
export class BarbersDataService {

  barbersData: Barbers[] = [{
    "name": "ALISSA C.",
    "image":"./assets/img/barbers/alissa.jpg",
    "bio":" She is a talented barber specializing in cutting, shaves, facials, and neck and shoulder massage. Her smile is infectious and she never meets a stranger. Loves all aspects of barber profession."
  },{
    "name": "Charlie",
    "image":"./assets/img/barbers/charlie.jpg",
    "bio":"With 40 years of experience in shoe shines, he is a valuable asset to Preston Forest Babers"
  },{
    "name": "JUKE",
    "image":"./assets/img/barbers/juke.jpg",
    "bio":"With an outrageous sense of humor, A Barber Named Juke is sure to keep you in good spirits. It is obvious hair is something he does take seriously however, and he aims to prove that to anyone that sits in his chair. With a military background and an apprenticeship in San Diego, Juke has rounded his understanding of the craft in several facets of the hair industry here in Dallas, and is a proficient Barber of all hair textures."
  }]; 
  constructor() { 
  }
  getBarbersData() {
    return this.barbersData;
  }
}

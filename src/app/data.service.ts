import { Injectable } from '@angular/core';
import { Service } from './classes/service';
import { Barber } from './classes/barber';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataServices: Service[] = [
    {
      "id":1,
      "title": "Free Hair / Beard style consultation",
      "price": [0],
      "duration": 15,
      "description":"Looking for a new Barber or wanna change your style? Our team of experts will help you to choose the best solution for you. What are you waiting for? Join the Team Barbers for Connoisseurs."
    },
    {
      "id":2,
      "title": "Connoisseur's Hair Cut",
      "price": [60, 65, 70],
      "duration": 45,
      "description": "Hair is cut only after the required style and result is discussed with the barber. The hair shampoo is included before and or after the haircut."
    },
    {
      "id":3,
      "title": "Connoisseur's Scissor Beard Trimming",
      "price": [50, 55, 60],
      "duration": 30,
      "description": "This is for anyone who wants to keep his beard long but trim it regularly so that it always looks groomed. Trimming with scissors gives a natural, clean and neat result. The service includes pleasant hot towels and the application of perfumed oils to make the beard shiny and soft."
    }, 
    {
      "id":4,
      "title": "Luxury Wet Shave",
      "price": [50, 55, 60],
      "duration": 30,
      "description": "Classic shave carried out in the “Gian Antonio Pisterzi style”. It stimulates tired skin, leaving it smooth, moisturized and glowing. It also protects the skin from the weather. Enjoy the application of hot towels and a fast, energizing face wash with a purifying product."
    }
    ]

  dataBarbers: Barber[] = [{
    "id":1,
    "rating": 0,
    "services": [1,4],
    "name": "ALISSA",
    "image":"./assets/img/barbers/alissa.jpg",
    "bio":" She is a talented barber specializing in cutting, shaves, facials, and neck and shoulder massage. Her smile is infectious and she never meets a stranger. Loves all aspects of barber profession."
    },{
    "id":2,
    "rating": 1,
    "services": [2,4],
    "name": "Charlie",
    "image":"./assets/img/barbers/charlie.jpg",
    "bio":"With 40 years of experience in shoe shines, he is a valuable asset to Preston Forest Babers",
    },{
    "id":3,
    "rating": 2,
    "services": [2,3],
    "name": "JUKE",
    "image":"./assets/img/barbers/juke.jpg",
    "bio":"With an outrageous sense of humor, A Barber Named Juke is sure to keep you in good spirits. It is obvious hair is something he does take seriously however, and he aims to prove that to anyone that sits in his chair. With a military background and an apprenticeship in San Diego, Juke has rounded his understanding of the craft in several facets of the hair industry here in Dallas, and is a proficient Barber of all hair textures."
    }];
  
  dataSchedule;
  
  constructor() { }

  getDataServices() {
    return this.dataServices;
  }

  getDataBarbers() {
    return this.dataBarbers;
  }

  getDataSchedule() {
    return this.dataSchedule;
  }
}

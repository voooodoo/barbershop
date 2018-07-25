import { Injectable } from '@angular/core';
import { Services } from './services.model';

@Injectable({
  providedIn: 'root'
})
export class BarberServicesService {

  dataServices: Services[] = [
    {
      "title": "Free Hair / Beard style consultation",
      "price": 0,
      "duration": 15,
      "description":"Looking for a new Barber or wanna change your style? Our team of experts will help you to choose the best solution for you. What are you waiting for? Join the Team Barbers for Connoisseurs."
    },
    {
      "title": "Connoisseur's Hair Cut",
      "price": 65,
      "duration": 45,
      "description": "Hair is cut only after the required style and result is discussed with the barber. The hair shampoo is included before and or after the haircut."
    },
    {
      "title": "Connoisseur's Scissor Beard Trimming",
      "price": 50,
      "duration": 30,
      "description": "This is for anyone who wants to keep his beard long but trim it regularly so that it always looks groomed. Trimming with scissors gives a natural, clean and neat result. The service includes pleasant hot towels and the application of perfumed oils to make the beard shiny and soft."
    }, 
    {
      "title": "Luxury Wet Shave",
      "price": 50,
      "duration": 30,
      "description": "Classic shave carried out in the “Gian Antonio Pisterzi style”. It stimulates tired skin, leaving it smooth, moisturized and glowing. It also protects the skin from the weather. Enjoy the application of hot towels and a fast, energizing face wash with a purifying product."
    }

  ]

  constructor() { }

    getDataServices() {
    return this.dataServices;
  }
}

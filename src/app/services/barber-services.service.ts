import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarberServicesService {

  dataServices: any[] = [
    {
      "title": "Free Hair / Beard style consultation",
      "price": "Free",
      "duration": "15 minutes",
      "description":"Looking for a new Barber or wanna change your style? Our team of experts will help you to choose the best solution for you. What are you waiting for? Join the Team Barbers for Connoisseurs."
    },
    {
      "title": "Connoisseur's Hair Cut",
      "price": "65.00",
      "duration": "45 minutes",
      "description": "Hair is cut only after the required style and result is discussed with the barber. The hair shampoo is included before and or after the haircut."
    },
    {
      "title": "Connoisseur's Scissor Beard Trimming",
      "price": "50.00",
      "duration": "30 minutes",
      "description": "This is for anyone who wants to keep his beard long but trim it regularly so that it always looks groomed. Trimming with scissors gives a natural, clean and neat result. The service includes pleasant hot towels and the application of perfumed oils to make the beard shiny and soft."
    }

  ]

  constructor() { }
}

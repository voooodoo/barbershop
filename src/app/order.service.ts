import { Injectable } from '@angular/core';
import { Order } from './classes/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  currentOrder: Order;

  
  constructor() { 
  }
  createOrder(currentService, currentBarber, currentDate) {
    this.currentOrder = new Order(currentService, currentBarber, currentDate)
  }
  getOrder() {
    return this.currentOrder;
  }
  setCurrentService(value) {
    this.currentOrder.currentService = value;
  }
  setCurrentBarber(value) {
    this.currentOrder.currentBarber = value;
  }
  setCurrentDate(value) {
    this.currentOrder.currentDate = value;
  }
}
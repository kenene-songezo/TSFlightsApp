import { Injectable } from '@angular/core';
import { Flight } from './flights.model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  date1: Date = new Date('2020-02-25T23:18:21.932Z'); 
  date2: Date = new Date('2020-02-25T23:21:21.932Z'); 
  date3: Date = new Date('2020-05-25T23:18:00.932Z'); 
  date4: Date = new Date('2020-05-25T23:23:21.932Z'); 
  flights: Flight[]=[
    {origin: "Miami", 
    destination:"chicago", 
    flightNumber: 345,
    depart: this.date1,
    arrive: this.date2, 
    nonstop: false},

    {origin: "New York", 
    destination:"Los Angeles", 
    flightNumber: 432,
    depart: this.date3,
    arrive: this.date4, 
    nonstop: false}
  ];

  constructor() { }

  getFlights(){
    return this.flights;
  }

  postFlight(flight: Flight){

  }

  deleteFlights(id: number){

  }
}

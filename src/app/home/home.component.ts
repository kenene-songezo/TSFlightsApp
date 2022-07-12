import { Component, OnInit } from '@angular/core';
import { FlightsService } from '../flights.service';
import { Flight } from '../flights.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  flights: Flight[];

  constructor(private flightService: FlightsService) {
    this.flights = this.flightService.getFlights();
  }
  
  ngOnInit(): void {
    
  }

  getFlights() {
    
  }

}

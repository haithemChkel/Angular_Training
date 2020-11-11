import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Flight } from '../models';

@Injectable({
  providedIn: 'root'
})
export class FlightService {

  flights$: Observable<Flight[]>;

  constructor() {
    const keys = Array(1000).keys();
    const flights = [...Array.from(keys)].map(
      i => {
        return {
          id: i,
          flightNumber: `AERO${Math.floor(Math.random() * Math.floor(200))}`,
          departureAirportCode: Math.random().toString(36).substring(7).toUpperCase(),
          arrivalAirportCode: Math.random().toString(36).substring(7).toUpperCase(),
          dateAndTimeOfDeparture: new Date(2020, 11, 16, 17, 23, 42, 11),
          dateAndTimeOfArrival: new Date(2020, 11, 17, 5, 23, 42, 11),
          delay: Math.floor(Math.random() * Math.floor(3000)) % 2 === 0,
          price: Math.floor(Math.random() * Math.floor(3000))
        };
      }
    );
    this.flights$ = new BehaviorSubject<Flight[]>(flights);
   }
}
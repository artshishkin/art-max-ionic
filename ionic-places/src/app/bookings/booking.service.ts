import {Injectable} from '@angular/core';

import {Booking} from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private _bookings: Booking[] = [
    new Booking('b1', 'p1', 'u1', 'Kramatorsk Eve', 3)
  ];

  constructor() {
  }

  get bookings(): Booking[] {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._bookings];
  }
}

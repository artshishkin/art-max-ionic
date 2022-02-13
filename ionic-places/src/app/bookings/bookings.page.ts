import {Component, OnInit} from '@angular/core';

import {BookingService} from './booking.service';
import {IonItemSliding} from '@ionic/angular';

import {Booking} from './booking.model';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {

  loadedBookings: Booking[] = [];

  constructor(private bookingService: BookingService) {
  }

  ngOnInit() {
    this.loadedBookings = this.bookingService.bookings;
  }

  onEditBooking(id: string, slidingEl: IonItemSliding) {
    slidingEl.close().then();
    console.log('Editing booking');
  }

  onCancelBooking(id: string, slidingEl: IonItemSliding) {
    slidingEl.close().then();
    console.log('Cancelling booking');
  }
}

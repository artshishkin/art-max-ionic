import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {ModalController} from '@ionic/angular';

import {Place} from '../../places/place.model';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {

  @Input() selectedPlace: Place;
  @Input() selectedMode: 'select' | 'random';

  @ViewChild('f') form: NgForm;

  startDate: string;
  endDate: string;

  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit() {
    const from = new Date(this.selectedPlace.availableFrom);
    const to = new Date(this.selectedPlace.availableTo);
    if (this.selectedMode === 'random') {
      const delta = 0.6 * (to.getTime() - from.getTime());
      const randomDelta = Math.round(Math.random() * delta);
      const startDate = new Date(from.getTime() + randomDelta);
      this.startDate = startDate.toISOString();
      const endDate = new Date(startDate.getTime() + Math.random() * (to.getTime() - startDate.getTime()));
      this.endDate = endDate.toISOString();
    }
  }

  onBookPlace() {
    if (this.form.invalid || !this.datesValid()) {
      return;
    }
    this.modalCtrl
      .dismiss(
        {
          bookingData: {
            firstName: this.form.value['first-name'],
            lastName: this.form.value['last-name'],
            guestNumber: this.form.value['guest-number'],
            startDate: this.form.value['date-from'],
            endDate: this.form.value['date-to'],
          }
        },
        'my-confirm')
      .then();
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel').then();
  }

  datesValid(): boolean {
    const dateFrom = new Date(this.form?.value['date-from']);
    const dateTo = new Date(this.form?.value['date-to']);
    return dateTo > dateFrom;
  }

}

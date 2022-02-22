import {Component, Input, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';

import {Place} from '../../places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {

  @Input() selectedPlace: Place;
  @Input() selectedMode: 'select' | 'random';

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
    this.modalCtrl.dismiss({message: 'Some dummy message'}, 'my-confirm').then();
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel').then();
  }
}

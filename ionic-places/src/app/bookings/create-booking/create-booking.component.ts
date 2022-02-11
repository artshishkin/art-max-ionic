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

  constructor(private modalCtrl: ModalController) {
  }

  ngOnInit() {
  }

  onBookPlace() {
    this.modalCtrl.dismiss({message:'Some dummy message'}, 'my-confirm').then();
  }

  onCancel() {
    this.modalCtrl.dismiss(null, 'cancel').then();
  }
}
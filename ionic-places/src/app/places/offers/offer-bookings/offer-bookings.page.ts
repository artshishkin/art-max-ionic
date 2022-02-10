import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {

  constructor(private navCtrl: NavController, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onClickBack() {
    this.navCtrl.navigateBack(['..'], {relativeTo: this.activatedRoute}).then();
  }
}

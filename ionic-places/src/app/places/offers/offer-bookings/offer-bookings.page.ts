import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {NavController} from '@ionic/angular';
import {map} from 'rxjs/operators';

import {Place} from '../../place.model';
import {PlacesService} from '../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {

  place: Place;

  constructor(
    private navCtrl: NavController,
    private activatedRoute: ActivatedRoute,
    private placesService: PlacesService) {
  }

  ngOnInit() {
    this.activatedRoute.paramMap
      .pipe(
        map(params => params.get('placeId')),
        map(placeId => this.placesService.getById(placeId))
      )
      .subscribe(place => this.place = place);
  }

  onClickBack() {
    this.navCtrl.navigateBack(['..'], {relativeTo: this.activatedRoute}).then();
  }
}

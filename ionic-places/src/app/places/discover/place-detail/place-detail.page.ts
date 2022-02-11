import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {ModalController, NavController} from '@ionic/angular';
import {map} from 'rxjs/operators';

import {PlacesService} from '../../places.service';
import {Place} from '../../place.model';
import {CreateBookingComponent} from '../../../bookings/create-booking/create-booking.component';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private modalCtrl: ModalController
  ) {
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('placeId')),
        map(placeId => this.placesService.getById(placeId))
      )
      .subscribe(place => this.place = place);

  }

  onBookPlace() {
    // this.router.navigate(['..']).then();
    // this.navCtrl.navigateBack(['..'], {relativeTo: this.route}).then();
    // this.navCtrl.pop().then();
    this.modalCtrl.create({component: CreateBookingComponent}).then(modalEl => modalEl.present());
  }
}

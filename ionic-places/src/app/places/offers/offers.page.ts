import {Component, OnInit} from '@angular/core';
import {Place} from '../place.model';
import {PlacesService} from '../places.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  offers: Place[] = [];

  constructor(private placesService: PlacesService) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.offers = this.placesService.places;
  }

  onEdit(offerId: string) {
    console.log(`Editing item ${offerId}`);
  }
}

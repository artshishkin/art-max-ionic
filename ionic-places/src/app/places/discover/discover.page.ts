import {Component, OnInit} from '@angular/core';
import {MenuController} from '@ionic/angular';

import {Place} from '../place.model';
import {PlacesService} from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  places: Place[];
  listedPlaces: Place[];

  constructor(
    private placesService: PlacesService,
    private menuCtrl: MenuController
  ) {
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.places = this.placesService.places;
    this.listedPlaces = this.places.slice(1);
  }

  onOpenMenu() {
    // this.menuCtrl.enable(true, 'm1').then();
    this.menuCtrl.open('m1').then();
    // this.menuCtrl.toggle('m1').then();
  }
}

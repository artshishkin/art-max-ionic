import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {map} from 'rxjs/operators';

import {PlacesService} from '../../places.service';
import {Place} from '../../place.model';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {

  place: Place;

  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService) {
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('placeId')),
        map(placeId=>this.placesService.getById(placeId))
      )
      .subscribe(place => this.place = place);
  }

}

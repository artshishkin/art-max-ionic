import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
  form: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private placesService: PlacesService,
    private builder: FormBuilder) {
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(
        map(params => params.get('placeId')),
        map(placeId => this.placesService.getById(placeId))
      )
      .subscribe(place => {
        this.place = place;
        this.form = this.builder.group({
          title: this.builder.control(place.title, {
            updateOn: 'blur',
            validators: [Validators.required]
          }),
          description: this.builder.control(place.description, {
            updateOn: 'blur',
            validators: [Validators.required, Validators.maxLength(180)]
          })
        });
      });
  }

  onEditOffer() {
    console.log(this.form.value);
  }
}

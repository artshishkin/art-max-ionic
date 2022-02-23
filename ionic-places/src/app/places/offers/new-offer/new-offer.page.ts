import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {PlacesService} from '../../places.service';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {

  form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private placesService: PlacesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.form = this.builder.group({
      title: this.builder.control(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      description: this.builder.control(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(180)]
      }),
      price: this.builder.control(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)]
      }),
      dateFrom: this.builder.control(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),
      dateTo: this.builder.control(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      })
    });

  }

  onCreateOffer() {
    if (this.form.invalid) {
      return;
    }

    this.placesService.addPlace(
      this.form.value.title,
      this.form.value.description,
      +this.form.value.price,
      new Date(this.form.value.dateFrom),
      new Date(this.form.value.dateTo)
    );
    console.log(this.form.value);

    this.router.navigate(['..'], {relativeTo: this.activatedRoute});
  }
}

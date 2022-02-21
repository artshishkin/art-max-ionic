import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {

  form: FormGroup;

  constructor(private builder: FormBuilder) {
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
    console.log(this.form.value);
  }
}

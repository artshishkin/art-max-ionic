import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  constructor(private router: Router, private navCtrl: NavController, private route: ActivatedRoute) {
  }

  ngOnInit() {
  }

  onBookPlace() {
    // this.router.navigate(['..']).then();
    this.navCtrl.navigateBack(['..'], {relativeTo: this.route}).then();
    // this.navCtrl.pop().then();
  }
}

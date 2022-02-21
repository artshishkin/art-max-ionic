import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {LoadingController} from '@ionic/angular';

import {AuthService} from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {

  isLoading = false;
  isLogin = true;

  constructor(
    private authService: AuthService,
    private loadingCtrl: LoadingController,
    private router: Router) {
  }

  ngOnInit() {
  }

  onLogin() {
    this.isLoading = true;
    this.authService.login();
    this.loadingCtrl
      .create({
        keyboardClose: true,
        message: 'Logging in...'
      })
      .then(loadingEl => {
        loadingEl.present();

        setTimeout(() => {
            this.isLoading = false;
            loadingEl.dismiss();
            this.router.navigate(['/']);
          },
          1500);
      });
  }

  onSubmit(form: NgForm) {
    console.log(form);
    console.log(form.value);
    console.log(JSON.stringify(form.value));
    console.log(form.controls);
  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }
}

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
    if (form.invalid) {
      return;
    }
    const email = form.value.email;
    const password = form.value.password;

    console.log(email, password);

    if (this.isLogin) {
      //Send a request to server to login
    } else {
      //Send a request to server to signup
    }

  }

  onSwitchAuthMode() {
    this.isLogin = !this.isLogin;
  }
}

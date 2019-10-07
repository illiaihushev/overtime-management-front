import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {SignInForm} from './sign-in-form';
import {ExistingAppService} from '../../services/existing-app.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  model = new SignInForm();

  constructor(
    private authService: ExistingAppService,
    private router: Router,
  ) {
  }

  ngOnInit() {
  }

  sign_in(signIn: SignInForm) {
    const token = this.authService.signIn(signIn.user);
    token.subscribe({
      next: (tkn) => {
        this.router.navigate(['home']);
      },
      error: (err) => {
        this.model.serverErrorMsg = JSON.stringify(err.error.message).replace(/^"|"$/g, '');
      }
    });
  }

}

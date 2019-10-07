import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './interceptors/auth-interceptor';
import { OvertimesComponent } from './components/overtimes/overtimes.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  { path: 'login', component: SignInComponent },
  { path: 'overtimes', component: OvertimesComponent },
  { path: 'home', component: HomeComponent },

  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    EmailValidatorDirective,
    OvertimesComponent,
    HomeComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

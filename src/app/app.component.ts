import { Component } from '@angular/core';
import {SignUpComponent} from './pages/sign-up/sign-up.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    SignUpComponent
  ],
  template: '<sp-sign-up></sp-sign-up>',
  styleUrls: []
})
export class AppComponent {
}

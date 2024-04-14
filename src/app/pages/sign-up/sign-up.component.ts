import { Component } from '@angular/core';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {MainComponent} from './components/main/main.component';

@Component({
  selector: 'sp-sign-up',
  standalone: true,
  imports: [
    SidebarComponent,
    MainComponent
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {

}

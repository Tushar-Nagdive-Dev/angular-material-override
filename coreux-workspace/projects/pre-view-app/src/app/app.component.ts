import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { CoreUxInputComponent } from 'coreux';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    CoreUxInputComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pre-view-app';
  control = new FormControl('');
}

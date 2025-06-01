import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CoreUxInputComponent, ThemeService } from 'coreux';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CoreUxInputComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(public themeService: ThemeService) {}

  nameControl: FormControl = new FormControl('', []);

  switchTheme(theme: string) {
    this.themeService.setTheme(theme);
  }
}

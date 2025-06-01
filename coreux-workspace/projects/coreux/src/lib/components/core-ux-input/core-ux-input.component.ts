import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'

@Component({
  selector: 'core-ux-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  templateUrl: './core-ux-input.component.html',
  styleUrls: ['./core-ux-input.component.scss']
})
export class CoreUxInputComponent {
  @Input() placeholder: string = '';
  @Input() control: FormControl = new FormControl();
}

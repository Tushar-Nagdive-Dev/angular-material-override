import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'core-ux-input',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    LucideAngularModule
  ],
  templateUrl: './core-ux-input.component.html',
  styleUrls: ['./core-ux-input.component.scss']
})
export class CoreUxInputComponent implements OnInit {
  @Input() placeholder: string = '';
  @Input() control: FormControl = new FormControl();
  @Input() type: string = 'text';
  @Input() icon?: string;
  @Input() suffixIcon?: string;
  @Input() hint?: string;
  @Input() errorMessage: string = 'Invalid input';
  @Input() readonly: boolean = false;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() dense: boolean = false;
  @Input() appearance: 'fill' | 'outline' = 'fill';

  @Input() minLength?: number;
  @Input() maxLength?: number;
  @Input() minValue?: number;
  @Input() maxValue?: number;

  @Input() alphaOnly: boolean = false;
  @Input() numericOnly: boolean = false;
  @Input() alphanumericOnly: boolean = false;

  @Input() showWordCount: boolean = false;
  @Input() showLetterCount: boolean = false;
  @Input() showSpaceCount: boolean = false;

  ngOnInit(): void {
    const validators = [];

    if (this.required) validators.push(Validators.required);
    if (this.minLength) validators.push(Validators.minLength(this.minLength));
    if (this.maxLength) validators.push(Validators.maxLength(this.maxLength));
    if (this.minValue && this.type === 'number') validators.push(Validators.min(this.minValue));
    if (this.maxValue && this.type === 'number') validators.push(Validators.max(this.maxValue));
    if (this.alphaOnly) validators.push(Validators.pattern(/^[A-Za-z\s]*$/));
    if (this.numericOnly) validators.push(Validators.pattern(/^\d*$/));
    if (this.alphanumericOnly) validators.push(Validators.pattern(/^[A-Za-z0-9\s]*$/));

    this.control.setValidators(validators);
    this.control.updateValueAndValidity();

    if (this.disabled) {
      this.control.disable({ emitEvent: false });
    }
  }

  get letterCount(): number {
    return this.control.value?.replace(/\s/g, '').length || 0;
  }

  get wordCount(): number {
    return this.control.value?.trim().split(/\s+/).filter(Boolean).length || 0;
  }

  get spaceCount(): number {
    return (this.control.value?.match(/\s/g) || []).length;
  }
}

import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-beer-create',
  imports: [CommonModule, ReactiveFormsModule, InputTextModule, ButtonModule, TextareaModule, CalendarModule],
  templateUrl: './beer-create.component.html',
  styleUrl: './beer-create.component.scss'
})
export class BeerCreateComponent {
  private fb = inject(FormBuilder);

  readonly beerForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    description: ['', [Validators.required]],
    tagline: ['', [Validators.required]],
    first_brewed: ['', [Validators.required]],
    abv: ['', [Validators.required, Validators.min(0), Validators.max(100)]],
    ibu: ['', [Validators.required, Validators.min(0)]],
    ph: ['', [Validators.required, Validators.min(0), Validators.max(15)]],
    brewers_tips: ['', [Validators.required]],
    food_pairing: ['', [Validators.required]],
  })

  onSubmit() {
    if (this.beerForm.valid) {
      const beers = JSON.parse(localStorage.getItem('beers') || '[]');
      beers.push(this.beerForm.value);
      localStorage.setItem('beers', JSON.stringify(beers));
      this.beerForm.reset();
      alert('Beer created successfully!');
    } else {
      this.beerForm.markAllAsTouched();
    }
  }

  get f() {
    return this.beerForm.controls;
  }

}

/* 

this.fb.group({
    name: ['', [Validators.required]],
    username: ['', [Validators.required, Validators.minLength(3)]],
    shorText: ['', [Validators.maxLength(100)]],
    email: ['', [Validators.email]],
    phone: ['', [Validators.pattern(/^[0-9]{9}$/)]],
    age: [null, [Validators.min(18), Validators.max(99)]],
    password: ['', 
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/A-Z/)
      ]],
  })

*/
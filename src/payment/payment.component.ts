import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public paymentForm: any;
  items: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.paymentForm = this.fb.group({
      name: ['', Validators.required],
      payment: this.fb.group({
        amount: ['', [Validators.required, Validators.pattern('^[0-9,.]+$')]],
        reference: ['']
      }),

      items: this.fb.array([this.createItem()])
    });

  }

  createItem(): FormGroup {
    return this.fb.group({
      description: ['', Validators.required]
    });
  }

  addItem(): void {
    this.items = this.paymentForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }

  removeItem(i: number) {
    this.items.removeAt(i);
  }

  onSubmit() {
    console.warn(this.paymentForm);
  }

}

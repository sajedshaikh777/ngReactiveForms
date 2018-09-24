import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public paymentForm: any;
  payments: FormArray;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.paymentForm = this.fb.group({
      name: ['', Validators.required],
      payment: this.fb.group({
        reference: ['']
      }),

      payments: this.fb.array([this.createPayment()])
    });

  }

  createPayment(): FormGroup {
    return this.fb.group({
      amount: ['', [Validators.required, Validators.pattern('^[0-9,.]+$')]]
      // description: ['', Validators.required]
    });
  }

  addPayment(): void {
    this.payments = this.paymentForm.get('payments') as FormArray;
    this.payments.push(this.createPayment());
  }

  // removeItem(i: number) {
  //   this.payments.removeAt(i);
  // }

  onSubmit() {
    // console.warn(this.paymentForm);
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-payments-array',
  templateUrl: './payments-array.component.html',
  styleUrls: ['./payments-array.component.css']
})
export class PaymentsArrayComponent implements OnInit {

  @Input('paymentForm') paymentForm: any;
  @Input('payments') payments: any;

  constructor() { }

  ngOnInit() {
    console.warn(this.payments);
  }

  removePayment(i: number) {
    this.payments.removeAt(i);
  }

}

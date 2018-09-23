import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  public paymentForm: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.paymentForm = this.fb.group({
      name: ['', Validators.required],
      payment: this.fb.group({
        amount: ['', [Validators.required, Validators.pattern('^[0-9,.]+$')]],
        reference: ['']
      }),


    });

  }

  onSubmit() {
    console.warn(this.paymentForm);
  }

}

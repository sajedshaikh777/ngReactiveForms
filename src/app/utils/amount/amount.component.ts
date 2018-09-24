import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';


@Component({
  selector: 'app-amount',
  templateUrl: './amount.component.html',
  styleUrls: ['./amount.component.css']
})
export class AmountComponent implements OnInit {

  @Input('paymentForm') paymentForm: any;
  @Input('payments') payments: any;

  constructor() { }

  ngOnInit() {

    // console.warn(this.paymentForm);
    // console.warn(this.payments);

  }

}

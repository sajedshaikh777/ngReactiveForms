import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  @Input('paymentForm') paymentForm: any;
  @Input('payments') payments: any;

  constructor() { }

  ngOnInit() { }

  removeItem(i: number) {
    this.payments.removeAt(i);
  }

}

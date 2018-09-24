import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { AppComponent } from '../app.component';
import { DataServicesFactory } from '../services/data';
import { PanelStateConstant } from '../utils/utils.constants';
import { STEPS } from '../app.config';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent extends AppComponent implements OnInit {

  constructor(public _formBuilder: FormBuilder) {
    super(_formBuilder);
    this.stepIndicator = STEPS.CONFIRM + 1;
  }

  ngOnInit() {
  }

  newPaymentClick() {
    DataServicesFactory.setJourneyStep(PanelStateConstant.txCreate);
  }

}

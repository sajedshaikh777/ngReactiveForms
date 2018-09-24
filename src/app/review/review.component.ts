import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { AppComponent } from '../app.component';
import { DataServicesFactory } from '../services/data';
import { PanelStateConstant } from '../utils/utils.constants';
import { STEPS } from '../app.config';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent extends AppComponent implements OnInit {

  constructor(public _formBuilder: FormBuilder) {
    super(_formBuilder);
    this.stepIndicator = STEPS.REVIEW + 1;
  }

  ngOnInit() {
  }

  continueClick() {
    DataServicesFactory.setJourneyStep(PanelStateConstant.txConfirm);
  }

}

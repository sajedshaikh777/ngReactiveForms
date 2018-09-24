import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { AppComponent } from '../app.component';
import { DataServicesFactory } from '../services/data';
import { PanelStateConstant } from '../utils/utils.constants';
import { STEPS } from '../app.config';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent extends AppComponent implements OnInit {

  constructor(public _formBuilder: FormBuilder) {
    super(_formBuilder);
    this.stepIndicator = STEPS.CREATE + 1;
  }

  ngOnInit() {
  }

  continueClick() {
    DataServicesFactory.setJourneyStep(PanelStateConstant.txReview);
  }

}

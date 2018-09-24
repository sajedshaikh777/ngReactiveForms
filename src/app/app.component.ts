import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { DataServicesFactory, PaymentFormObservsbleService } from './services/data';
import { PanelStateConstant } from './utils/utils.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  public createPanel: String = 'txCreate';
  public reviewPanel: String = 'txReview';
  public confirmPanel: String = 'txConfirm';
  public STEPS: any;
  public mainStep: any;
  public stepIndicator: any;

  public paymentForm: FormGroup;

  constructor(public _formBuilder: FormBuilder) {
    this.STEPS = PanelStateConstant;
    this.paymentForm = PaymentFormObservsbleService.getForm(_formBuilder);
  }

  ngOnInit() {
    this.mainStep = PanelStateConstant.txCreate;
    console.warn(this.paymentForm);
  }

  /**
   * Step getter
   */
  get step(): any {
    return DataServicesFactory.getJourneyStep();
  }

  /**
   * Step setter
   */
  set step(target: any) {
    DataServicesFactory.setJourneyStep(target);
  }

}

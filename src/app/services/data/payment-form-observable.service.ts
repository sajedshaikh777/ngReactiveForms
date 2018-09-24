import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Injectable()

export class PaymentFormObservsbleService {

    private static paymentForm: FormGroup = null;

    static getForm(_formBuilder: FormBuilder) {
        if (this.paymentForm == null) {
            this.paymentForm = _formBuilder.group({
                payments: _formBuilder.array([]),
            });
        }
        return this.paymentForm;
    }
}

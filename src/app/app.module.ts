import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NameComponent } from './utils/name';
import { CreateComponent } from './create';
import { ReviewComponent } from './review';
import { ConfirmComponent } from './confirm';
import { PaymentComponent } from './utils/payment';
import { ReferenceComponent } from './utils/reference';
import { AmountComponent, CurrencyFormatterPipe, CurrencyFormatterDirective } from './utils/amount';
import { DescriptionComponent } from './utils/description';
import { PaymentsArrayComponent } from './utils/payments-array';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    NameComponent,
    PaymentComponent,
    ReferenceComponent,
    AmountComponent,
    CurrencyFormatterPipe,
    CurrencyFormatterDirective,
    DescriptionComponent,
    PaymentsArrayComponent,
    CreateComponent,
    ReviewComponent,
    ConfirmComponent
  ],
  bootstrap: [AppComponent],
  exports: [CurrencyFormatterPipe, CurrencyFormatterDirective],
  providers: [CurrencyFormatterPipe]
})
export class AppModule { }

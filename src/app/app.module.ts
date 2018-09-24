import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NameComponent } from './utils/name';
import { PaymentComponent } from './utils/payment';
import { ReferenceComponent } from './utils/reference';
import { AmountComponent, CurrencyFormatterPipe, CurrencyFormatterDirective } from './utils/amount';
import { DescriptionComponent } from './utils/description';
import { PaymentsArrayComponent } from './utils/payments-array';
import { CreateComponent } from './create/create.component';
import { ReviewComponent } from './review/review.component';
import { ConfirmComponent } from './confirm/confirm.component';

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

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NameComponent } from '../name';
import { PaymentComponent } from '../payment';
import { ReferenceComponent } from '../reference';
import { AmountComponent, CurrencyFormatterPipe, CurrencyFormatterDirective } from '../amount';

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    NameComponent,
    PaymentComponent,
    ReferenceComponent,
    AmountComponent,
    CurrencyFormatterPipe,
    CurrencyFormatterDirective
  ],
  bootstrap: [AppComponent],
  exports: [CurrencyFormatterPipe, CurrencyFormatterDirective],
  providers: [CurrencyFormatterPipe]
})
export class AppModule { }

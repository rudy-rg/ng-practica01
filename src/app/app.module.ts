import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormContactComponent } from './form-contact/form-contact.component';
import { HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { QuotesService} from './servicios/quotes.service';

@NgModule({
  declarations: [
    AppComponent,
    FormContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[
    HttpClientModule
  ],
  providers: [
    QuotesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

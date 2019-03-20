import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpService } from './http.service';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { NewComponent } from './new/new.component';
import { QuotesComponent } from './quotes/quotes.component';
import { NewQuoteComponent } from './new-quote/new-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    EditComponent,
    HomeComponent,
    NewComponent,
    QuotesComponent,
    NewQuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';


import { AppComponent } from './app.component';
import { DataService } from './shared/dataService';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2SearchPipeModule,
    Ng2OrderModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

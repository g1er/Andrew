import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SwmComponent } from './swm/swm.component';
import { SwmStartListComponent } from './swm-start-list/swm-start-list.component';

@NgModule({
  declarations: [
    AppComponent,
    SwmComponent,
    SwmStartListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SwmComponent } from './swm/swm.component';
import { SwmStartListComponent } from './swm-start-list/swm-start-list.component';
import { RegFormComponent } from './reg-form/reg-form.component';
import { FontDirective } from './directives/font.directive';
import { colorDirective } from './directives/color.directive';
import { BdayPipe } from './pipes/bday.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SwmComponent,
    SwmStartListComponent,
    RegFormComponent,
    FontDirective,
    colorDirective,
    BdayPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './components/parent/parent.component';
import { EnfantComponent } from './components/enfant/enfant.component';
import { TauxPipe } from './pipes/taux.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    EnfantComponent,
    TauxPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

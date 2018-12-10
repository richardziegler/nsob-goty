import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BestgameComponent } from './components/bestgame/bestgame.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    BestgameComponent
  ],
  exports:[
    MatAutocompleteModule,
    MatFormFieldModule,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

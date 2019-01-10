import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BestgameComponent } from './components/bestgame/bestgame.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule, MatButtonModule, MatStepperModule, MatCardModule } from '@angular/material';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {DragDropModule} from '@angular/cdk/drag-drop';
import { BallotComponent } from './components/ballot/ballot.component';
import { HttpClientModule } from '@angular/common/http';
import { ResultsComponent } from './components/results/results.component';
import { AppRoutingModule } from './app-routing.module';
import { MostAnticipatedComponent } from './components/most-anticipated/most-anticipated.component';

import { BallotSummaryComponent } from './components/ballot-summary/ballot-summary.component';
import { ResultTableComponent } from './components/result-table/result-table.component';

@NgModule({
  declarations: [
    AppComponent,
    BestgameComponent,
    BallotComponent,
    ResultsComponent,
    MostAnticipatedComponent,
    BallotSummaryComponent,
    ResultTableComponent
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
    DragDropModule,
    MatButtonModule,
    HttpClientModule,
    AppRoutingModule,
    MatTableModule,
    MatStepperModule,
    MatCardModule,
    MatListModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

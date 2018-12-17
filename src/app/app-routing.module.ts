import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultsComponent } from './components/results/results.component';
import { BallotComponent } from './components/ballot/ballot.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  { path: 'results', component: ResultsComponent },
  { path: 'ballot', component: BallotComponent },
  { path: '', component: BallotComponent},
];

@NgModule({
  exports: [ RouterModule ],
  imports: [
    RouterModule.forRoot(routes)
   ]
})
export class AppRoutingModule {}

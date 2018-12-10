import { Injectable } from '@angular/core';
import { Ballot } from 'src/app/models/ballot';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {
  scoring = [15, 12, 10, 8, 6, 5, 4, 3, 2, 1];
  constructor() { }

  submit(ballot: Ballot) {
    ballot.chosenBestGames.forEach((choice, x) => {
      choice.score = this.scoring[x];
    });

    console.log(ballot);
  }
}

import { Component, OnInit } from '@angular/core';
import {eligibleGames, eligibleRemasters } from '../../assets/gamelist';
import { SubmissionService } from 'src/app/services/submission/submission.service';
import { Ballot } from 'src/app/models/ballot';
import { Choice } from 'src/app/models/choice';

@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.component.html',
  styleUrls: ['./ballot.component.css']
})
export class BallotComponent implements OnInit {

  usersName = '';
  anticipatedChoice = '';
  eligibleGames = eligibleGames;
  eligibleRemasters = eligibleRemasters;
  chosenGames = [];
  chosenRemasters = [];
  chosenSurprises = [];
  chosenDisappointments = [];
  chosenAnticipated = [];
  constructor(private submissionService: SubmissionService) { }

  ngOnInit() {
  }

  submit() {
    var ballot = new Ballot();
    ballot.name = this.usersName;
    ballot.chosenBestGames = this.chosenGames.map(x => new Choice(x));
    ballot.chosenBestRemasters = this.chosenRemasters.map(x => new Choice(x));
    ballot.chosenBiggestDisappointments = this.chosenRemasters.map(x => new Choice(x));
    ballot.chosenBiggestSurprises = this.chosenRemasters.map(x => new Choice(x));
    ballot.chosenMostAnticipated = this.anticipatedChoice;
    this.submissionService.submit(ballot).subscribe(foo => {
      console.log(foo);
    });
    console.log(ballot.name);
    console.log(ballot.chosenMostAnticipated);
  }

}

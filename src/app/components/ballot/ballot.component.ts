import { Component, OnInit } from '@angular/core';
import {eligibleGames, eligibleRemasters } from '../../assets/gamelist';
import { SubmissionService } from 'src/app/services/submission/submission.service';
import { Ballot } from 'src/app/models/ballot';
import { Choice } from 'src/app/models/choice';
import { SubmissionState } from 'src/app/models/submissionState';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.component.html',
  styleUrls: ['./ballot.component.css']
})
export class BallotComponent implements OnInit {
  
  submissionState = SubmissionState.Waiting;
  error = null;
  name = '';
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

  addMostAnticipated(event) {
    console.log(event);
  }

  submit() {
    this.submissionState = SubmissionState.Submitting
    var ballot = new Ballot();
    ballot.name = this.name;
    ballot.chosenBestGames = this.chosenGames;
    ballot.chosenBestRemasters = this.chosenRemasters;
    ballot.chosenBiggestDisappointments = this.chosenDisappointments;
    ballot.chosenBiggestSurprises = this.chosenSurprises;
    ballot.chosenMostAnticipated = this.chosenAnticipated;
    this.submissionService.submit(ballot).subscribe(foo => {
      this.submissionState = SubmissionState.Sent;
    }, (err) => {
      console.log(err);
      this.submissionState = SubmissionState.Waiting;
      this.error = err;
    });
  }
}

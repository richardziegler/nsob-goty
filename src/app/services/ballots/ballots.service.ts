import { Injectable } from '@angular/core';
import { Ballot, SingleBallot } from 'src/app/models/ballot';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BallotsService {
  scoring = [15, 12, 10, 8, 6, 5, 4, 3, 2, 1];
  options = { headers: new HttpHeaders().set('Content-Type', 'application/json')};
  constructor(private http: HttpClient) { }
  betaApi = "https://9dac8vkhn1.execute-api.us-west-2.amazonaws.com/beta";
  submit(ballot: Ballot) {
    var bestGames = this.buildBallot(1, ballot.name, ballot.chosenBestGames);
    var biggestDisappointments = this.buildBallot(2, ballot.name, ballot.chosenBiggestDisappointments);
    var biggestSurprise = this.buildBallot(3, ballot.name, ballot.chosenBiggestSurprises);
    var bestRemasters = this.buildBallot(4, ballot.name, ballot.chosenBestRemasters);
    var mostAnticipated = this.buildBallot(5, ballot.name, ballot.chosenMostAnticipated);

    return forkJoin(
      this.http.post<SingleBallot>(this.betaApi, bestGames, this.options),
      this.http.post<SingleBallot>(this.betaApi, biggestDisappointments, this.options),
      this.http.post<SingleBallot>(this.betaApi, biggestSurprise, this.options),
      this.http.post<SingleBallot>(this.betaApi, bestRemasters, this.options),
      this.http.post<SingleBallot>(this.betaApi, mostAnticipated, this.options)
    );
  }

  getResults() {
    return this.http.get<any>(this.betaApi, this.options);
  }

  buildBallot(ballotTypeId: number, username: string, games: string[]) {
    var ballot = new SingleBallot();
    ballot.ballotTypeId = ballotTypeId;
    ballot.username = username;
    ballot.firstPlace = games[0] ? games[0] : '';
    ballot.secondPlace = games[1] ? games[1] : '';
    ballot.thirdPlace = games[2] ? games[2] : '';
    ballot.fourthPlace = games[3] ? games[3] : '';
    ballot.fifthPlace = games[4] ? games[4] : '';
    ballot.sixthPlace = games[5] ? games[5] : '';
    ballot.seventhPlace = games[6] ? games[6] : '';
    ballot.eighthPlace = games[7] ? games[7] : '';
    ballot.ninthPlace = games[8] ? games[8] : '';
    ballot.tenthPlace = games[9] ? games[9] : '';

    return ballot;
  }
}

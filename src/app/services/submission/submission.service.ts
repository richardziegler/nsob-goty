import { Injectable } from '@angular/core';
import { Ballot } from 'src/app/models/ballot';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {
  scoring = [15, 12, 10, 8, 6, 5, 4, 3, 2, 1];
  options = { headers: new HttpHeaders().set('Content-Type', 'application/json').append('Authorization', 'authtoken') };
  constructor(private http: HttpClient) { }
  betaApi = "https://9dac8vkhn1.execute-api.us-west-2.amazonaws.com/beta";
  submit(ballot: Ballot) {
    ballot.chosenBestGames.forEach((choice, x) => {
      choice.score = this.scoring[x];
    });

    // headers.append('Authorization', 'authtoken');

    return this.http.post<Ballot>(this.betaApi, ballot, this.options);
  }
}

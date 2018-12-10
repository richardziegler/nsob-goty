import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { map, startWith } from 'rxjs/operators';
import eligibleGames from '../../assets/gamelist';

@Component({
  selector: 'app-bestgame',
  templateUrl: './bestgame.component.html',
  styleUrls: ['./bestgame.component.css']
})
export class BestgameComponent implements OnInit {
  gameControl = new FormControl('');
  games = eligibleGames;
  filteredGames: Observable<string[]>

  constructor() { }

  ngOnInit() {
    this.filteredGames = this.gameControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.games.filter(option => option.toLowerCase().includes(filterValue));
  }

}

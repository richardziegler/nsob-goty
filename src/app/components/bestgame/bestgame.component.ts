import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { map, startWith } from 'rxjs/operators';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
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
  chosenGames = [];

  constructor() { }

  ngOnInit() {
    this.filteredGames = this.gameControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  onOptionSelected(event) {
    if (this.chosenGames.length < 10) {
      var title = event.option.value;
      this.chosenGames.push(title);
      this.games = this.games.filter(x => x !== title);
      this.gameControl.setValue('');
    }

    console.log(this.chosenGames);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.chosenGames, event.previousIndex, event.currentIndex);
  }

  remove(game: string) {
    this.chosenGames = this.chosenGames.filter(x => x !== game);
    this.games.push(game);
    this.games = this.games.sort();
    this.gameControl.setValue('');
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.games.filter(option => option.toLowerCase().includes(filterValue));
  }

}

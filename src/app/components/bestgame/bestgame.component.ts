import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { map, startWith } from 'rxjs/operators';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-bestgame',
  templateUrl: './bestgame.component.html',
  styleUrls: ['./bestgame.component.css']
})
export class BestgameComponent implements OnInit {
  @Input() games: string[];
  @Input() choices: string[];
  @Input() placeholder: string;

  gameControl = new FormControl('');
  filteredGames: Observable<string[]>;
  hasSelectedGame: Boolean = false;

  constructor() { }

  ngOnInit() {
    this.filteredGames = this.gameControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  onOptionSelected(event) {
    if (this.choices.length < 10) {
      var title = event.option.value;
      this.choices.push(title);
      this.games = this.games.filter(x => x !== title);
      this.gameControl.setValue('');
      this.hasSelectedGame = true;
    }
    console.log('hi', this.choices);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.choices, event.previousIndex, event.currentIndex);
  }

  remove(game: string) {
    this.choices = this.choices.filter(x => x !== game);
    this.games.push(game);
    this.games = this.games.sort();
    this.gameControl.setValue('');
    if (this.choices.length < 1) {
      this.hasSelectedGame = false;
    }
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.games.filter(option => option.toLowerCase().includes(filterValue));
  }

}




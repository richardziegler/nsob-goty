import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-most-anticipated',
  templateUrl: './most-anticipated.component.html',
  styleUrls: ['./most-anticipated.component.css']
})
export class MostAnticipatedComponent implements OnInit {
  @Input() choices: string[];

  gameControl = new FormControl('');
  hasSelectedGame: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.choices, event.previousIndex, event.currentIndex);
  }

  remove(game: string) {
    this.choices = this.choices.filter(x => x !== game);
    this.gameControl.setValue('');
    if (this.choices.length < 1) {
      this.hasSelectedGame = false;
    }
  }

  onOptionSelected(event) {
    if (this.choices.length < 10) {
      var title = event.target.value;
      this.choices.push(title);
      this.gameControl.setValue('');
      this.hasSelectedGame = true;
    }
    console.log('hi', this.choices);
  }

}

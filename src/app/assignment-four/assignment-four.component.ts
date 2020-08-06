import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-four',
  templateUrl: './assignment-four.component.html',
  styleUrls: ['./assignment-four.component.css'],
})
export class AssignmentFourComponent implements OnInit {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onGameStarted(clickCount: number) {
    if (clickCount % 2 === 0) {
      this.evenNumbers.push(clickCount);
    } else {
      this.oddNumbers.push(clickCount);
    }
  }

  onGameRestarted() {
    this.oddNumbers = [];
    this.evenNumbers = [];
  }
  constructor() {}

  ngOnInit(): void {}
}

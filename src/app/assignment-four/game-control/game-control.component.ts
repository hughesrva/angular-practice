import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  clickCount = 0;
  interval;

  @Output() startClicked = new EventEmitter<number>();
  @Output() restartClicked = new EventEmitter<number>();

  onStartClick() {
    this.interval = setInterval(() => {
      this.startClicked.emit(this.clickCount++);
      console.log(this.clickCount);
    }, 1000);
  }

  onStopClick() {
    clearInterval(this.interval);
    console.log('Game stopped!');
  }

  onRestartClick() {
    clearInterval(this.interval);
    this.clickCount = 0;
  }

  constructor() {}

  ngOnInit(): void {}
}

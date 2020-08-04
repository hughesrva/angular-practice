import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  clickCount = 0;
  interval;

  @Output() startClicked = new EventEmitter<{
    clickCount: number;
  }>();

  onStartClick() {
    this.interval = setInterval(() => {
      this.startClicked.emit({
        clickCount: this.clickCount++,
      });
      console.log(this.clickCount);
    }, 1000);
  }

  onStopClick() {
    clearInterval(this.interval);
    console.log('Game stopped!');
  }
  constructor() {}

  ngOnInit(): void {}
}

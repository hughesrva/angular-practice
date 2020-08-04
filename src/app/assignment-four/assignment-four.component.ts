import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-four',
  templateUrl: './assignment-four.component.html',
  styleUrls: ['./assignment-four.component.css'],
})
export class AssignmentFourComponent implements OnInit {
  clickNumbers = [];
  onGameStarted(countData: { clickCount: number }) {
    
  }
  constructor() {}

  ngOnInit(): void {}
}

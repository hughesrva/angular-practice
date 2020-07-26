import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment-three',
  templateUrl: './assignment-three.component.html',
  styleUrls: ['./assignment-three.component.css'],
})
export class AssignmentThreeComponent implements OnInit {
  isClicked = false;
  clickList = [];

  onClick() {
    this.isClicked = !this.isClicked;
    this.clickList.push(new Date());
    console.log(this.clickList);
  }
  constructor() {}

  ngOnInit(): void {}
}

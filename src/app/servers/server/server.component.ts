import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
  styles: ['.online{color: white}'],
})
export class ServerComponent {
  serverID: number;
  serverStatus: string;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    this.serverID = Math.floor(Math.random() * 21);
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}

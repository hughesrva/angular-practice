import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  serverID: number;
  serverStatus: string;

  getServerID() {
    this.serverID = Math.floor(Math.random() * 21);
    return this.serverID;
  }

  getServerStatus() {
    if (this.serverID > 10) {
      this.serverStatus = 'offline';
    } else {
      this.serverStatus = 'online';
    }
    return this.serverStatus;
  }
}

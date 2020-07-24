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
    return (this.serverID = Math.floor(Math.random() * 21));
  }

  getServerStatus() {
    return this.serverID > 10 ? 'offline' : 'online';
  }
}

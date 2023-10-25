import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = true;
  serverCreationStatus = "No server was created."
  serverName = 'Server Name';
  serverWasCreated = false;
  servers = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = false;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverWasCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server: " + this.serverName + " was created successfully!";
  }

  //onUpdateServerName(event: Event) {
    //console.log(event);
    //this.serverName = (<HTMLInputElement>event.target).value;
  //}

}

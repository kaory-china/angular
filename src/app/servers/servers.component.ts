import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  username = '';
  disableUserCreation = true;

  ngOnInit(): void {
  }

  onCreateUserName() {
    this.username = '';
  }
}

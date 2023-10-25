import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent  {
    serverId = 16;
    serverStatus = Math.random() > 0.5 ? 'online' :'offline';

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.getServerStatus() === 'online'? "green":"red"; 
    }
}
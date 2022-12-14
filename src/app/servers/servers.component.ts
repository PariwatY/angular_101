import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: '<app-server></app-server><app-server></app-server>',
  templateUrl:'./servers.component.html',
  styleUrls: ['./servers.component.css']

})
export class ServersComponent {
    allowNewServer = false;
    serverCreationStatus = 'No Server was created';
    serverName = 'TestName';
    serverCreated = false;
    servers = ['Test00001','Test00002']
    constructor() {
      setTimeout(() => {
        this.allowNewServer = true;
      },2000)
    }

    ngOnInit(){
    }

    onCreateServer(){
      this.serverCreated = true;
      this.servers.push(this.serverName);
      this.serverCreationStatus = 'Server was created Name is ' + this.serverName
    }

    onUpdatedServerName(event: Event){
        console.log(event)
        this.serverName = (<HTMLInputElement>event.target).value;
    }
}


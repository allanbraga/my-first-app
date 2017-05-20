import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '.app-servers', using element class
  //selector: '[app-servers]' using element attribute,
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  allowServerStatus = 'Allow servers is not allowed!.';
  serverName = 'Test Server';
  serverCreated = false;
  servers = ['Server 1','Server 2'];

  constructor() {
    setTimeout(() =>{
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.allowServerStatus = ' Allow servers was allowed !.'+this.serverName;
  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}

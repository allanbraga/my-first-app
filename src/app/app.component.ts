import {Component, OnInit} from '@angular/core';
import {AccountService} from "./accounts.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = '';
  serverElements = [{type:'server', name: 'Server 1', content:'Content'}];
  newServerName = '';
  newServerContent = '';
  value = 5;

  accounts : {name:string, status:string}[] = [];

  constructor(private accountSevice : AccountService){}

  onServerAdded(serverData:{serverName:string, serverContent:string}){
    this.serverElements.push({type:'server',name:serverData.serverName,content:serverData.serverContent});
  }

  onBlueprintAdded(blueprintData:{serverName:string, serverContent:string}){
    this.serverElements.push({type:'blueprint',name:blueprintData.serverName,content:blueprintData.serverContent});
  }

  onDestroyFirst(){
    this.serverElements.splice(0,1);
  }

  ngOnInit(){
    this.accounts = this.accountSevice.accounts;
  }


}

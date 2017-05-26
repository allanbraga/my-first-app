import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import {Router, ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-servers-route',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersRouteComponent implements OnInit {
  private servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService , private router:Router , private route:ActivatedRoute) { }

  ngOnInit() {
    this.servers = this.serversService.getServers();
  }

  onReload(){
    // how to navigate using relative path
    this.router.navigate(['servers'],{relativeTo:this.route});
  }

}

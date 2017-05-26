import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-server-route',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerRouteComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService , private route:ActivatedRoute) { }

  ngOnInit() {
    // getting parameters from URL
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.route.params.subscribe((params : Params) => {
      this.server = this.serversService.getServer(+params['id']);
    });
  }

}
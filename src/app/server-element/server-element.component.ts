import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.Emulated // none (to get global style ) , native , emulated (default)
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement') element : {type:string ,name:string , content:string}

  constructor() { }

  ngOnInit() {
  }

}

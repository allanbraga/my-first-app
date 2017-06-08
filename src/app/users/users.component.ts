import {Component, OnInit} from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];
  userActivated : number;

  constructor(private usersService:UsersService){
  }

  ngOnInit() {
    this.usersService.userActivate.subscribe(
      (id:number) => {
        this.userActivated = id;
        console.log("USER ACTIVATE ...."+id);
      }
    )
  }
}

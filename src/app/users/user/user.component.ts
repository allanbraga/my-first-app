import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {Subscription} from "rxjs/Rx";
import {UsersService} from "../../users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit , OnDestroy {

  user: {id: number, name: string};
  paramsSubscription : Subscription;

  constructor(private route:ActivatedRoute, private userSevice:UsersService) { }

  ngOnInit() {
    this.user = {
      id:this.route.snapshot.params['id'],name:this.route.snapshot.params['name']
    };

    // observable way to use when the parameters has changed but using the same URL like /users/1/Allan to /users/2/Ze
    this.paramsSubscription = this.route.params.subscribe(
      (params : Params) => {
        this.user.id = params['id'];
        this.user.name = params['name'];
      }
    );
  }

  ngOnDestroy() {

    this.paramsSubscription.unsubscribe();
  }

  onActivate(){
    this.userSevice.userActivate.next(this.user.id);
  }

}

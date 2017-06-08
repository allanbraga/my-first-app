import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {Observable, Observer, Subscription} from "rxjs/Rx";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {

  numbersSubscription : Subscription;
  customSubscription : Subscription;
  constructor(private router:Router ,private authService:AuthService) { }

  ngOnInit() {

    const numbers = Observable.interval(1000);
    this.numbersSubscription = numbers.subscribe(x => console.log(x));

    const myObservable = Observable.create((observer : Observer<string>) => {
      setTimeout(() => {
        observer.next('first Package');
      },2000);
      setTimeout(() => {
        observer.next('second Package');
      },4000);
      setTimeout(() => {
        observer.error('this does not work');
      },5000);
      // if there is any error complete will not call and also anything which is called after complete will not work.
      // to see more look at http://reactivex.io/rxjs/class/es6/Observable.js~Observable.html#static-method-interval
      setTimeout(() => {
        observer.complete();
      },6000);
    });

   this.customSubscription =  myObservable.subscribe(
      (data : string) => {console.log(data);},
      (error : string) => {console.log(error);},
      () => {console.log('completed');}
    );
  }

  onLoadServer(id:number){
    // go to another page passing parameters
    this.router.navigate(['/servers', id , 'edit'],{queryParams:{allowEdit:'1'},fragment:'loading'});
  }

  onLogin(){
    this.authService.login();
  }

  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy(){
    // clean up Observable subscriptions
    this.customSubscription.unsubscribe();
    this.numbersSubscription.unsubscribe();
  }

}

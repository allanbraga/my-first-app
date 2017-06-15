import {Injectable} from "@angular/core";
import {Headers,Http,Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpServerService{
  constructor(private http:Http){ }

  storeServers(servers: any[]){
    const headers = new Headers({'Content-type':'application/json'});
    //return this.http.post('https://udemy-ng-http-ea263.firebaseio.com/data.json',servers,{headers:headers});
    return this.http.put('https://udemy-ng-http-ea263.firebaseio.com/data.json',servers,{headers:headers});
  }

  getServers(){
    return this.http.get('https://udemy-ng-http-ea263.firebaseio.com/data.json').map(
      (response:Response) => {
        const data = response.json();
        return data;
      }
    )
    .catch(
      (error:Response) =>{
        console.log(error);
        return Observable.throw(error);
      }
    );
  }
  getServerByIndex(index:number){
    return this.http.get('https://udemy-ng-http-ea263.firebaseio.com/data/'+index+'.json').map(
      (response:Response) => {
        const data = response.json();
        return data;
      }
    )
    .catch(
      (error:Response) =>{
        console.log(error);
        return Observable.throw(error);
      }
    );
  }

  deleteServer(index:number){
    return this.http.delete('https://udemy-ng-http-ea263.firebaseio.com/data/'+index+'.json');
  }

  getAppName(){
    return this.http.get('https://udemy-ng-http-ea263.firebaseio.com/data/appName.json').map(
      (response:Response) => {
        const data = response.json();
        return data;
      }
    )
      .catch(
        (error:Response) =>{
          console.log(error);
          return Observable.throw(error);
        }
      );
  }
}

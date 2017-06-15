import {Component, OnInit} from "@angular/core";
import {HttpServerService} from "./http-server.service";

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {

  constructor(private httpService:HttpServerService) { }

  appName = this.httpService.getAppName();
  
  servers = [];

  onAddServer(name: string) {
    this.servers.push({
      name: name,
      capacity: 50,
      id: this.generateId()
    });
  }
  private generateId() {
    return Math.round(Math.random() * 10000);
  }

  onSave(){
    this.httpService.storeServers(this.servers).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }

  onLoad(){
    this.httpService.getServers().subscribe(
      (data:any[]) => {
        this.servers = data;
        console.log(data);
      } ,
      (error) => console.log(error)
    );
  }

  onDelete(index:number){
    this.httpService.deleteServer(index).subscribe(
      (response) => {
        console.log(response);
        this.onLoad();
      },
      (error) => console.log(error)
    )
  }

  ngOnInit() {
  }
}

import {Component, Input} from "@angular/core";
import {AccountService} from "../accounts.service";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  // Dependency injection of AccountService class -- getting it from providers definitions
  constructor(private accountService:AccountService){}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id,status);
    this.accountService.statusUpdated.emit(status);
  }
}

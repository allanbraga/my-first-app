import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { WarningAlertComponent } from './warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './success-alert/success-alert.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { BasicHighlightDirective } from './basic-highlight/basic-highlight.directive';
import { BetterHighlitghtDirective } from './better-highlight/better-highlitght.directive';
import { UnlessDirective } from './structural-directives/unless.directive';
import {NewAccountComponent} from "./new-account/new-account.component";
import {AccountComponent} from "./account/account.component";
import {AccountService} from "./accounts.service";
import {LoggingServie} from "./logging.service";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {UserComponent} from "./users/user/user.component";
import {EditServerComponent} from "./servers-rout/edit-server/edit-server.component";
import {ServersRouteComponent} from "./servers-rout/servers.component";
import {ServersService} from "./servers-rout/servers.service";
import {ServerRouteComponent} from "./servers-rout/server/server.component";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {AppRoutingModule} from "./app-routing.module";
import {AuthService} from "./auth.service";
import {AuthGuard} from "./auth-guard.service";
import {CanDeactivateGuard} from "./servers-rout/edit-server/can-deactivate-guard.service";
import { ErrorPageComponent } from './error-page/error-page.component';
import {ServerResolver} from "./servers-rout/server/server-resolver-service";
import {UsersService} from "./users.service";
import { FormComponent } from './form/form.component';
import { FormReactiveComponent } from './form-reactive/form-reactive.component';
import { PipesComponent } from './pipes/pipes.component';
import {ShortenPipe} from "./pipes/shorten.pipe";
import { FilterPipe } from './pipes/filter.pipe';
import { HttpComponent } from './http/http.component';
import {HttpServerService} from "./http/http-server.service";



@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    CockpitComponent,
    ServerElementComponent,
    BasicHighlightDirective,
    BetterHighlitghtDirective,
    UnlessDirective,
    NewAccountComponent,
    AccountComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
    ServersRouteComponent,
    EditServerComponent,
    ServerRouteComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    FormComponent,
    FormReactiveComponent,
    PipesComponent,
    ShortenPipe,
    FilterPipe,
    HttpComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [AccountService , LoggingServie , ServersService , AuthService , AuthGuard, CanDeactivateGuard,ServerResolver,UsersService,HttpServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }



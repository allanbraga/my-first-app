import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {UsersComponent} from "./users/users.component";
import {UserComponent} from "./users/user/user.component";
import {ServersRouteComponent} from "./servers-rout/servers.component";
import {ServerRouteComponent} from "./servers-rout/server/server.component";
import {EditServerComponent} from "./servers-rout/edit-server/edit-server.component";
import {NewAccountComponent} from "./new-account/new-account.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";
import {AuthGuard} from "./auth-guard.service";
import {CanDeactivateGuard} from "./servers-rout/edit-server/can-deactivate-guard.service";
import {ErrorPageComponent} from "./error-page/error-page.component";
import {ServerResolver} from "./servers-rout/server/server-resolver-service";
import {FormComponent} from "./form/form.component";
import {FormReactiveComponent} from "./form-reactive/form-reactive.component";

const appRoutes: Routes = [
  {path:'' , component : HomeComponent },

  {path:'form' , component : FormComponent},
  {path:'form-reactive' , component : FormReactiveComponent},

  {path:'users' , component : UsersComponent , children:[
    {path:':id/:name' , component : UserComponent}
  ]},
  {path:'servers' ,
    //canActivate:[AuthGuard] if you want to make just for parent route
    canActivateChild:[AuthGuard], // if you want to make just for all children routes
    component : ServersRouteComponent , children: [
    {path:':id' , component : ServerRouteComponent , resolve:{server:ServerResolver}},
    {path:':id/edit' , component : EditServerComponent, canDeactivate:[CanDeactivateGuard]}
  ]},
  {path:'account' , component : NewAccountComponent},
  //{path:'not-found' , component : PageNotFoundComponent},
                                                      // passing static data to another page
  {path:'not-found' , component : ErrorPageComponent , data :{message:'Page Not found !'}},
  // to handle all request that are not mapped
  {path:'**' , redirectTo:'/not-found'}

];


@NgModule({

  imports:[
    RouterModule.forRoot(appRoutes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule {

}

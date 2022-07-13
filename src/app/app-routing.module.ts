import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { GuardauthGuard } from './guardauth.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: "full"},
  {path: 'home', component: HomeComponent, pathMatch: "full"},
  {path: 'admin', component: AdminComponent, canActivate: [GuardauthGuard], pathMatch: "full"},
  {path: 'login', component: LoginComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Security and Deployment - 
// Revision - recreated paths and imported components
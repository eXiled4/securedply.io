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
  {path: 'login', component: LoginComponent, pathMatch: "full"},
  { path: 'name', loadChildren: () => import('./name/name.module').then(m => m.NameModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Security and Deployment - 
// Revision - recreated paths and imported components

// OPTIMIZATION TECHNIQUES
// OnPush Change Detection - detects changes of updates in data, lets application know of change in app
// Detach Change Detection/NgZone - zone is a part of an app that persists across asynchronous tasks
    // Allows devs to chack code execution - useful for debugging, testing and profiling    
// Pure pipes - to format data based on input
// AOT compilation - produces compiled templates and reduce application payload 

// Lazy loading - splits app to feature modules and load on demand
// Trackby - Check objects and render newly added item
// Web workers - creates new thread that performs computation in the background
// Preloading modules - indicates when to load feature modules
// Resolve guards - Loads next components when HTTP loaded successfully
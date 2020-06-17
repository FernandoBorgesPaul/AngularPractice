
// First, AppRoutingModule imports RouterModule and Routes so the app can have routing functionality. The next import, HeroesComponent, will give the Router somewhere to go once you configure the routes.

// Notice that the CommonModule references and declarations array are unnecessary, so are no longer part of AppRoutingModule. The following sections explain the rest of the AppRoutingModule in more detail

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from "./dashboard/dashboard.component";  //To navigate to the dashboard, the router needs an appropriate route.
                                                                       // Import the DashboardComponent in the AppRoutingModule.
import { HeroDetailComponent } from "./hero-detail/hero-detail.component";

//Since AppRoutingModule already imports HeroesComponent, you can use it in the routes array:
//A typical Angular Route has two properties:
// path: a string that matches the URL in the browser address bar.
// component: the component that the router should create when navigating to this route.
// This tells the router to match that URL to path: 'heroes' and display the HeroesComponent when the URL is something like localhost:4200/heroes.

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  {path: 'dashboard', component: DashboardComponent},  //Add a route to the AppRoutingModule.routes array that matches a path to the DashboardComponent.
  {path: ' ', redirectTo:'/dashboard', pathMatch: 'full'},  //This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'.
                                                           //After the browser refreshes, the router loads the DashboardComponent and the browser address bar shows the /dashboard URL.
  {path: 'detail/:id', component: HeroDetailComponent}  //The colon (:) in the path indicates that :id is a placeholder for a specific hero id.
];
//The @NgModule metadata initializes the router and starts it listening for browser location changes.
@NgModule({
  imports: [RouterModule.forRoot(routes)], //The method is called forRoot() because you configure the router at the application's root level. The forRoot() method supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.
  exports: [RouterModule]                  //Next, AppRoutingModule exports RouterModule so it will be available throughout the app.
})
export class AppRoutingModule { }



// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class AppRoutingModule { }





// CL to generate this routing file: 
// ng generate module app-routing --flat --module=app
//--flat puts the file in src/app instead of its own folder.
// --module=app tells the CLI to register it in the imports array of the AppModule.
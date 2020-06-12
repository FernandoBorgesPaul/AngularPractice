import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { Observable, of } from "rxjs"; //Open the HeroService file and import the Observable and of symbols from RxJS.
import { MessageService } from "./message.service"; //In HeroService, import the MessageService.

// The HeroService could get hero data from anywhere—a web service, local storage, or a mock data source.
// Removing data access from components means you can change your mind about the implementation anytime, without touching any components.
//  They don't know how the service works.

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(
    private messageService: MessageService   //Modify the constructor with a parameter that declares a private messageService property. Angular will inject the singleton MessageService into that property when it creates the HeroService
  ) { }                                      //This is a typical "service-in-service" scenario: you inject the MessageService into the HeroService which is injected into the HeroesComponent.

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
  this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);                //of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
  }
  // Add a getHeroes method to return the mock heroes.
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

}

import { Injectable } from '@angular/core';
import { Hero } from "./hero";
import { HEROES } from "./mock-heroes";
import { Observable, of } from "rxjs"; //Open the HeroService file and import the Observable and of symbols from RxJS.

// The HeroService could get hero data from anywhere—a web service, local storage, or a mock data source.
// Removing data access from components means you can change your mind about the implementation anytime, without touching any components.
//  They don't know how the service works.

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeroes(): Observable<Hero[]> {
    return of(HEROES);                //of(HEROES) returns an Observable<Hero[]> that emits a single value, the array of mock heroes.
  }
  // Add a getHeroes method to return the mock heroes.
  // getHeroes(): Hero[] {
  //   return HEROES;
  // }

}

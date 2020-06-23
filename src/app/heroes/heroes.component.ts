import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';       //Return to the HeroesComponent class and import the Hero interface.
import { HeroService } from "../hero.service";
//Delete the HEROES import, because you won't need that anymore. Import the HeroService instead.
//import { HEROES } from "../mock-heroes"; //Open the HeroesComponent class file and import the mock HEROES.
import { MessageService } from "../message.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {

  heroes: Hero[]; //Replace the definition of the heroes property with a simple declaration.

  //selectedHero: Hero;


  //Refactor the component's hero property to be of type Hero. Initialize it with an id of 1 and the name Windstorm.
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm'
  // }

  constructor(
     private heroService: HeroService, //private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.getHeroes()
  }

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add('HeroService: Selected hero id=${hero.id}'); //shows how to send and display a message each time the user clicks on a hero, showing a history of the user's selections.
  // }

  //Create a function to retrieve the heroes from the service.  ORIGINAL
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
//n response to a click event, call the component's click handler, add(), and then clear the input field so that it's ready for another name. Add the following to the HeroesComponent class:

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

}

/*Observable.subscribe() is the critical difference.

The previous version assigns an array of heroes to the component's heroes property. The assignment occurs synchronously, as if the server could return heroes instantly or the browser could freeze the UI while it waited for the server's response.

That won't work when the HeroService is actually making requests of a remote server.

The new version waits for the Observable to emit the array of heroes—which could happen now or several minutes from now. The subscribe() method passes the emitted array to the callback, which sets the component's heroes property.

This asynchronous approach will work when the HeroService requests heroes from the server. */

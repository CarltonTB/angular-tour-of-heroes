import { Injectable } from '@angular/core';
import {Hero} from "./hero";
import {HEROES} from "./mock-heroes";
import {Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor( private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // of() returns an observable that emits an array of heroes
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }

  getHero(id: Number): Observable<Hero> {
    // ! means that we are certain that hero will not be null or undefined
    const hero = HEROES.find(hero => hero.id == id)!;
    this.messageService.add(`HeroService: fetched hero id=${id}`)
    return of(hero);
  }
}

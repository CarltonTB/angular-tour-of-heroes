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
}

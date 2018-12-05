import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

// annotate HEroService class with the Injectable decorator
// this makes the HeroService class participate in the dependency injection system
// HeroService class going to provide an injectable service
// 
@Injectable({ // this decorator accepts metadata object for the service like @Component decorator did for component classes
  providedIn: 'root',
})
export class HeroService {

  // will get injected MS
  // service-in-service
  constructor(private messageService: MessageService) { }


  // returns an Observable (async thingy) using the RxJS of() function
  getHeroes(): Observable<Hero[]> {

    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES); // return the observable that emits a single value
  }

  getHero(id: number): Observable<Hero> {
    // TODO: send the message _after_ fetching the hero 
    this.messageService.add(`HeroService: fetched hero id = ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}

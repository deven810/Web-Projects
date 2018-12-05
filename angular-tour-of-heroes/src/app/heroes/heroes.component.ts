import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  // Declare a hero (of type Hero) property for this component
  // selectedHero: Hero; ={
  //   id: 1,
  //   name: 'Windstorm',
  // };

  // onSelect(hero: Hero) {
  //   this.selectedHero = hero;
  // }

  // define a component property to expose HEROES array for binding!
  // heroes = HEROES;

  heroes: Hero[];

  // define a private heroService property and id it as a HeroService injection site
  // now, when Angular creates a HeroDetailComponent...
  // the DI system sets the heroService parameter to the singleton instance of HeroService
  constructor(private heroService: HeroService) { }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes); // subscreibe passes emitted array (once it arrives) to the callback
  }

  // LIFECYCLE HOOK 
  // after constructing a HeroesComponent instance
  ngOnInit() {
    this.getHeroes();
  }



}

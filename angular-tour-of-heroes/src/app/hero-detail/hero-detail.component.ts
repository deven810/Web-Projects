import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router'; // holds info about the route to a given instance of this component. grab from bag o' params this way.
import { Location } from '@angular/common'; // Angular service for interacting with the browser. used to nav back to the view that navigated here. 
import { HeroService } from '../hero.service'; // gets hero data from remote server. use to get the hero-to-display

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  // inject the services into constructor, saving their values in private fields 
  constructor(private route: ActivatedRoute, private heroService: HeroService, private location: Location) { }

  getHero(): void {

    // route.snapshot = static img of the route info after component was created
    // paramMap = dict of route params extracted from the URL 
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

  ngOnInit() {
    this.getHero();
  }

  goBack(): void {
    this.location.back();
  }

}
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { HttpResponse } from '@angular/common/http';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  hero: Hero = { id: 1, name: 'windStorm' };

  heroes: Hero[] = [];

  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes().subscribe((res: HttpResponse<Hero[]>) => this.heroes = res.body);
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }

}

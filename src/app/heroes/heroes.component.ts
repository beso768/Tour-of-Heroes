import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroServiceService } from '../hero-service.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroServiceService: HeroServiceService) {}
  getHeroes(): void {
    this.heroServiceService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes));
  }
  add(name: string): void {
    name = name.trim();
    if (!name) return;
    this.heroServiceService
      .addHero({ name } as Hero)
      .subscribe((hero) => this.heroes.push(hero));
  }
  ngOnInit(): void {
    this.getHeroes();
  }
}

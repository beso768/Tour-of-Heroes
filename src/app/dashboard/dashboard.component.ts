import { Component, OnInit } from '@angular/core';
import { HeroServiceService } from '../hero-service.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private heroServiceService: HeroServiceService) {}
  heroes: Hero[] = [];
  getHeroes(): void {
    this.heroServiceService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(0, 5)));
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}

import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router'; /* Es como usar un servicio */


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Heroe[] = [];

  constructor(private heroesService: HeroesService,
              private router: Router
              ) { }

  ngOnInit(): void {
    this.heroes = this.heroesService.showHeroes();
  }

  verHeroe(id: number) {
    this.router.navigate(['/heroe', id]);
  }

}

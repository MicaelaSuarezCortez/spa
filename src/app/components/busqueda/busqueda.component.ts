import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  heroes: any [] = [];
  termino: string = '';
  showMessage: boolean = false;

  @Input() id: string;
  @Input() heroe: any = {};

  constructor(private heroesService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              ) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this.heroesService.buscarHeroes(params['termino']);
        if (this.heroes.length === 0) {
          this.showMessage = true;
        } else {
          this.showMessage = false;
        }
        console.log(this.heroes);
     });
  }

  regresar() {
    this.router.navigate(['/heroes']);
  }
  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}

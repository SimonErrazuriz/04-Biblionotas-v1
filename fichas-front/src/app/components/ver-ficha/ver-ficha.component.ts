import { Component, OnInit } from '@angular/core';
import { FichasService } from 'src/app/services/fichas.service';
import { Ficha } from 'src/app/models/fichas';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-ficha',
  templateUrl: './ver-ficha.component.html',
  styleUrls: ['./ver-ficha.component.css'],
  providers: [FichasService]
})
export class VerFichaComponent implements OnInit {
  public ficha!: any;
  public titulo: String;

  constructor(
    private fichasService: FichasService,
    private _route: ActivatedRoute
  ) {
    this.titulo = 'Ver ficha';
  }

  ngOnInit(): void {
    this.getFicha();
  }

  getFicha() {
    const id = this._route.snapshot.paramMap.get('id');
    this.fichasService.getFicha(id)
      .subscribe(
        res => {
          this.ficha = res;
        }
      );
  }

}
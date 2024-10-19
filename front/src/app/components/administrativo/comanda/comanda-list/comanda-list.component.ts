import { Component, OnInit } from '@angular/core';
import { Comanda } from '../../../../models/administrativoModels/Comanda';
import { ComandasService } from '../../../../services/administrativo/comandas/comandas.service';

@Component({
  selector: 'app-comanda-list',
  standalone: true,
  imports: [],
  templateUrl: './comanda-list.component.html',
  styleUrl: './comanda-list.component.css'
})
export class ComandaListComponent implements OnInit{

  comandas: Comanda[] = [];
  comandaGeral: Comanda [] = [];

  constructor(private serviceComandas: ComandasService){}




  ngOnInit(): void {
    this.serviceComandas.List().subscribe((comandas) => {
      this.comandas = comandas;
      this.comandaGeral = comandas;
      console.log(comandas);
    })
  }

}


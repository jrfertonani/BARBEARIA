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

  comanda: Comanda[] = [];
  comandaGeral: Comanda [] = [];

  constructor(private serviceComandas: ComandasService){}




  ngOnInit(): void {
    this.serviceComandas.List().subscribe((comanda) => {
      this.comanda = comanda;
      this.comandaGeral = comanda;
      console.log(comanda);
    })
  }

}


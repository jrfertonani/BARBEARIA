import { Component, OnInit } from '@angular/core';
import { BarbeirosService } from '../../../../services/usuarios/barbeiros/barbeiros.service';
import { Barbeiros } from '../../../../models/usuarios/Barbeiros';

@Component({
  selector: 'app-barbeiro-list',
  standalone: true,
  imports: [],
  templateUrl: './barbeiro-list.component.html',
  styleUrl: './barbeiro-list.component.css'
})
export class BarbeiroListComponent implements OnInit{


  barbeiro: Barbeiros [] = [];
  barbeiroGeral: Barbeiros[] = [];

  constructor(private serviceBarbeiro: BarbeirosService) {}


  ngOnInit(): void {
      this.serviceBarbeiro.List().subscribe((barbeiro) => {
        this.barbeiro = barbeiro;
        this.barbeiroGeral = barbeiro;
        console.log(barbeiro);
      })

  }

}

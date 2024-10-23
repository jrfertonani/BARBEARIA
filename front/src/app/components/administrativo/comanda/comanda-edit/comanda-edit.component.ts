import { Component, OnInit } from '@angular/core';
import { ComandaFormComponent } from "../comanda-form/comanda-form.component";
import { ComandasService } from '../../../../services/administrativo/comandas/comandas.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Comanda } from '../../../../models/administrativoModels/Comanda';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comanda-edit',
  standalone: true,
  imports: [ComandaFormComponent,CommonModule],
  templateUrl: './comanda-edit.component.html',
  styleUrl: './comanda-edit.component.css'
})
export class ComandaEditComponent implements OnInit {

  btnAcao = "Editar";
  descTitulo = "Editar comanda"

  comanda!: Comanda;

  constructor(private serviceComanda: ComandasService,  private router: Router, private route: ActivatedRoute ){}



  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.serviceComanda.findById(id).subscribe(comanda => {


      this.comanda = comanda;
    })

  }

  editComanda(comanda : Comanda){
    this.serviceComanda.editComanda(comanda).subscribe(comanda => {
      this.router.navigate(['/comandas'])
    })

  }



}

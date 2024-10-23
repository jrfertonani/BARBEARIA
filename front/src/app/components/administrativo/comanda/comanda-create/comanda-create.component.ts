import { Component } from '@angular/core';
import { ComandaFormComponent } from "../comanda-form/comanda-form.component";
import { ComandasService } from '../../../../services/administrativo/comandas/comandas.service';
import { Router } from '@angular/router';
import { Comanda } from '../../../../models/administrativoModels/Comanda';

@Component({
  selector: 'app-comanda-create',
  standalone: true,
  imports: [ComandaFormComponent],
  templateUrl: './comanda-create.component.html',
  styleUrl: './comanda-create.component.css'
})
export class ComandaCreateComponent {

  btnAcao = "Cadastrar";
  descTitulo = "Cadastrar comanda";

  constructor(private serviceComandas: ComandasService, private router: Router){}


  createComandas(comanda: Comanda){
    this.serviceComandas.createComandas(comanda).subscribe(comanda => {
      this.router.navigate(['/comandas'])

      console.log(comanda);
    })
  }

}

import { Component } from '@angular/core';
import { ClienteFormComponent } from "../cliente-form/cliente-form.component";
import { Clientes } from '../../../../models/usuarios/Clientes';
import { ClientesService } from '../../../../services/usuarios/clientes/clientes.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cliente-create',
  standalone: true,
  imports: [ClienteFormComponent],
  templateUrl: './cliente-create.component.html',
  styleUrl: './cliente-create.component.css'
})
export class ClienteCreateComponent {

  constructor(private serviceCliente: ClientesService, private router: Router){}

  btnAcao = "Cadastrar";
  descTitulo = "Cadastrar Clientes"

  createCliente(clientes : Clientes){
    this.serviceCliente.createCliente(clientes).subscribe(cliente => {
      this.router.navigate(['/clientes']);
      console.log(cliente);
    })
  }

}


import { Component, OnInit } from '@angular/core';
import { ClienteFormComponent } from "../cliente-form/cliente-form.component";
import { ClientesService } from '../../../../services/usuarios/clientes/clientes.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Clientes } from '../../../../models/usuarios/Clientes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cliente-edit',
  standalone: true,
  imports: [ClienteFormComponent, CommonModule],
  templateUrl: './cliente-edit.component.html',
  styleUrl: './cliente-edit.component.css'
})
export class ClienteEditComponent implements OnInit{

  clientes!: Clientes;

  btnAcao = "Editar"
  descTitulo = "Editar Cliente"

  constructor(private serviceCliente: ClientesService, private router: Router, private route: ActivatedRoute){}


  ngOnInit(): void {

   // console.log(1) // busca o id

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.serviceCliente.findById(id).subscribe(clientes => {

    //  console.log(2);  //retorna o id

      this.clientes = clientes;
    });

  }


  editCliente(clientes: Clientes){
    this.serviceCliente.editCliente(clientes).subscribe(clientes => {
      this.router.navigate(['/clientes'])
      console.log(clientes);
    })

  }
}


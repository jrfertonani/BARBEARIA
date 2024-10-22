import { Component, OnInit } from '@angular/core';
import { Agenda } from '../../../../models/administrativoModels/Agenda';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgendaService } from '../../../../services/administrativo/agenda/agenda.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-agenda-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './agenda-list.component.html',
  styleUrl: './agenda-list.component.css'
})
export class AgendaListComponent implements OnInit{

  agenda: Agenda [] = [];
  agendaGeral: Agenda[] = [];


  constructor(private serviceAgenda: AgendaService){}


  ngOnInit(): void {
    this.serviceAgenda.List().subscribe((agenda) => {
      this.agenda = agenda;
      this.agendaGeral = agenda;

      console.log(agenda);
    })
  }


  search(event : Event){
      const target = event.target as HTMLInputElement;
      const value = target.value.toLocaleLowerCase();

      this.agenda = this.agendaGeral.filter(agenda => {
        return agenda.cliente.nome.toLocaleLowerCase().includes(value)
      })
    //console.log("TARGET", target);
    //console.log("VALUE", value);
  }

  delete(id: number){
    this.serviceAgenda.delete(id).subscribe(agenda =>{
      window.location.reload();
    })
  }
}


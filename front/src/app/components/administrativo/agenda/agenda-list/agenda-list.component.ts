import { Component, OnInit } from '@angular/core';
import { Agenda } from '../../../../models/administrativoModels/Agenda';
import { AgendaService } from '../../../../services/administrativo/agenda/agenda.service';

@Component({
  selector: 'app-agenda-list',
  standalone: true,
  imports: [],
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

}


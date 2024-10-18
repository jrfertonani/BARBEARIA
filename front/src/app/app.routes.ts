import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { ClienteListComponent } from './components/usuarios/clientes/cliente-list/cliente-list.component';
import { ClienteCreateComponent } from './components/usuarios/clientes/cliente-create/cliente-create.component';
import { ClienteEditComponent } from './components/usuarios/clientes/cliente-edit/cliente-edit.component';
import { BarbeiroListComponent } from './components/usuarios/barbeiros/barbeiro-list/barbeiro-list.component';
import { BarbeiroCreateComponent } from './components/usuarios/barbeiros/barbeiro-create/barbeiro-create.component';
import { BarbeiroEditComponent } from './components/usuarios/barbeiros/barbeiro-edit/barbeiro-edit.component';
import { AgendaListComponent } from './components/administrativo/agenda/agenda-list/agenda-list.component';
import { AgendaCreateComponent } from './components/administrativo/agenda/agenda-create/agenda-create.component';
import { AgendaEditComponent } from './components/administrativo/agenda/agenda-edit/agenda-edit.component';
import { ComandaListComponent } from './components/administrativo/comanda/comanda-list/comanda-list.component';
import { ComandaCreateComponent } from './components/administrativo/comanda/comanda-create/comanda-create.component';
import { ComandaEditComponent } from './components/administrativo/comanda/comanda-edit/comanda-edit.component';
import { ServicoListComponent } from './components/servicos/servico-list/servico-list.component';
import { ServicoEditComponent } from './components/servicos/servico-edit/servico-edit.component';
import { ServicoCreatComponent } from './components/servicos/servico-creat/servico-creat.component';

export const routes: Routes = [
  {path:'', component: HomeComponent},

  {path:'clientes', component: ClienteListComponent},
  {path:'cadastroCliente', component: ClienteCreateComponent},
  {path:'editarCliente/:id', component: ClienteEditComponent},

  {path:'barbeiros', component: BarbeiroListComponent},
  {path:'cadastroBarbeiro', component: BarbeiroCreateComponent},
  {path:'editarBarbeiro/:id', component: BarbeiroEditComponent},

  {path:'agenda', component: AgendaListComponent},
  {path:'cadastroAgenda', component: AgendaCreateComponent},
  {path:'editarAgenda/:id', component: AgendaEditComponent},

  {path:'comandas', component: ComandaListComponent},
  {path:'cadastroComandas', component: ComandaCreateComponent},
  {path:'editarComandas/:id', component: ComandaEditComponent},

  {path:'servicos', component: ServicoListComponent},
  {path:'cadastroServico', component: ServicoCreatComponent},
  {path:'editarServico/:id', component: ServicoEditComponent},




];

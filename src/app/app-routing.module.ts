import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorrentistaComponent } from './componentes/correntista/correntista.component';
import { MovimentacaoListComponent } from './componentes/movimentacao-list/movimentacao-list.component';
import { MovimentacaoNewComponent } from './componentes/movimentacao-new/movimentacao-new.component';

const routes: Routes = [
  {path: 'movimentacoes', component :MovimentacaoListComponent},
  {path: 'movimentacoes-new', component : MovimentacaoNewComponent},
  { path: 'correntistas', component: CorrentistaComponent },
  {path : '', redirectTo: 'movimentacoes', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

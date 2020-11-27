import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlterarCarrosComponent } from './views/carros/alterar-carros/alterar-carros.component';
import { ListarCarrosComponent } from './views/carros/listar-carros/listar-carros.component';


const routes: Routes = [
  {
    path: '',
    component: ListarCarrosComponent
  },
  {
    path: 'cadastro',
    component: AlterarCarrosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

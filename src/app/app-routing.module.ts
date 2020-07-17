import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrasesComponent } from './componentes/frases/frases.component';

const routes: Routes = [
  { path: 'frases', component: FrasesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

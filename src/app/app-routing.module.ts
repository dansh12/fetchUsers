import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsLayoutComponent } from './components/cards-layout/cards-layout.component';
import { TableLayoutComponent } from './components/table-layout/table-layout.component';


const routes: Routes = [
  {path: 'table-layout-component', component:TableLayoutComponent},
  {path: 'cards-layout-component', component:CardsLayoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

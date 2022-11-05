import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsLayoutComponent } from './components/cards-layout/cards-layout.component';
import { TableLayoutComponent } from './components/table-layout/table-layout.component';
import { UserInfoResolver } from './services/user-info-resolver/user-info-resolver.service';


const routes: Routes = [
  {path: 'table', component:TableLayoutComponent,resolve:[UserInfoResolver]},
  {path: 'cards', component:CardsLayoutComponent,resolve:[UserInfoResolver]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApptzsComponent } from './apptzs/apptzs.component';
import { BevsComponent } from './bevs/bevs.component';
import { DessertsComponent } from './desserts/desserts.component';
import { DishesComponent } from './dishes/dishes.component';
import { SoupsComponent } from './soups/soups.component';
import { SaladsComponent } from './salads/salads.component';
import { MenuRoutingModule } from './menu-routing.module';



@NgModule({
  declarations: [ApptzsComponent, BevsComponent, DessertsComponent, DishesComponent, SoupsComponent, SaladsComponent],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }

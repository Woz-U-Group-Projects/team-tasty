import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ApptzsComponent } from "./apptzs/apptzs.component";
import { BevsComponent } from "./bevs/bevs.component";
import { DessertsComponent } from "./desserts/desserts.component";
import { DishesComponent } from "./dishes/dishes.component";
import { SaladsComponent } from "./salads/salads.component";
import { SoupsComponent } from "./soups/soups.component";
import { MenuModule } from "./menu.module";

const routes: Routes = [
  {
    path: "menu/appetizers",
    component: ApptzsComponent
  },
  {
    path: "menu/beverages",
    component: BevsComponent
  },
  {
    path: "menu/desserts",
    component: DessertsComponent
  },
  {
    path: "menu/dishes",
    component: DishesComponent
  },
  {
    path: "menu/salads",
    component: SaladsComponent
  },
  {
    path: "menu/soups",
    component: SoupsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule {}

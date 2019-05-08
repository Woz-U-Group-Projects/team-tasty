
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NavbarComponent } from 'navbar/navbar.component';
import { ApptzsComponent } from 'menu/apptzs.component';
import { BevsComponent } from 'menu/bevs.component';
import { DessertsComponent } from 'menu/desserts.component';
import { DishesComponent } from 'menu/dishes.component';
import { SaladsComponent } from 'menu/salads.component';
import { SoupsComponent } from '/menu/soups.component';
import { MenuModule } from './menu.module';

const routes: Routes = [
    {
        path: 'menu',
        component: MenuModule,
        children: [
            {
                path: 'appetizers',
                component: ApptzsComponent
            },
            {
                path: 'beverages',
                component: BevsComponent
            },
            {
                path: 'desserts',
                component: DessertsComponent
            },
            {
                path: 'dishes',
                component: DishesComponent
            },
            {
                path: 'salads',
                component: SaladsComponent
            },
            {
                path: 'soups',
                component: SoupsComponent
            }
        ]
    }
];

@NgModule ({
    imports: [RouterModule, forChild(routes)],
    exports: [RouterModule]
})

export class MenuRoutingModule { }
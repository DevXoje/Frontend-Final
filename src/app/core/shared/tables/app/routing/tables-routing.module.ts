/* tslint:disable: ordered-imports*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Module */
import { TablesModule } from '../tables.module';

/* Containers */
import * as tablesContainers from '../views/containers';

/* Guards */
import * as tablesGuards from './guards';
import { SBRouteData } from '@shared/navigation/domain/models';

/* Routes */
export const ROUTES: Routes = [
    {
        path: '',
        canActivate: [],
        component: tablesContainers.TablesComponent,
        data: {
            title: 'Tables - SB Admin Angular',
            breadcrumbs: [
                {
                    text: 'Dashboard',
                    link: '/dashboard',
                },
                {
                    text: 'Tables',
                    active: true,
                },
            ],
        } as SBRouteData,
    },
];

@NgModule({
    imports: [TablesModule, RouterModule.forChild(ROUTES)],
    exports: [RouterModule],
})
export class TablesRoutingModule {}
///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { AppLayoutViewComponent } from './modules/application/app-layout/app-layout.view.component';
import { AuthenticationGuardService } from './core/auth/authentication-guard.service';

const routes: Routes = [
    {
        path: 'auth-callback',
        component: AuthCallbackComponent
    },
    {
        path: '',
        component: AppLayoutViewComponent,
        canActivate: [AuthenticationGuardService],
        children: [
            {
                path: 'projekte',
                loadChildren: './modules/projekte/projekte.module#ProjekteModule'
            },
            {
                path: 'to-dos',
                loadChildren: './modules/to-dos/to-dos.module#ToDosModule'
            },
        ]
    },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }

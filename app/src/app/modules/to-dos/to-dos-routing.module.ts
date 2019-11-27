///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ToDosModuleComponent } from './to-dos.module.component';
import { ToDosViewComponent } from './to-dos/to-dos.view.component';
import { AuthenticationGuardService } from './../../core/auth/authentication-guard.service';
import { AuthorizationGuardService } from './../../core/auth/authorization-guard.service';

const routes: Routes = [
    {
        path: '',
        component: ToDosModuleComponent,
        canActivate: [AuthenticationGuardService],
        children: [{
            path: '',
            redirectTo: 'to-dos',
            pathMatch: 'full'
        }, {
            path: 'to-dos',
            component: ToDosViewComponent
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    providers: []
})
export class ToDosRoutingModule { }


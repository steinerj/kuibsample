///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../../shared/shared.module';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ToDosModuleComponent } from './to-dos.module.component';
import { ToDosRoutingModule } from './to-dos-routing.module';
import { AppLayoutViewModule } from './../application/app-layout/app-layout.view.module';
import { ToDosViewModule } from './to-dos/to-dos.view.module';

export const config: NgModule = {
    declarations: [
        ToDosModuleComponent
    ],
    entryComponents: [],
    imports: [
        CommonModule,
        SharedModule,
        LayoutModule,
        AppLayoutViewModule,
        ToDosViewModule,
        ToDosRoutingModule
    ],
    exports: [],
    providers: []
};

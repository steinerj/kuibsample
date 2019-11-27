///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SharedModule } from './../../../shared/shared.module';
import { ToDosViewBaseComponent } from './to-dos.view.base.component';
import { ToDosViewComponent } from './to-dos.view.component';
import { RouterModule } from '@angular/router';

import { TopSectionComponent } from './topSection';

export const config: NgModule = {
    declarations: [
        ToDosViewBaseComponent,
        ToDosViewComponent,
        TopSectionComponent
    ],
    entryComponents: [],
    exports: [
        TopSectionComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        LayoutModule,
        RouterModule

    ],
    providers: []
};

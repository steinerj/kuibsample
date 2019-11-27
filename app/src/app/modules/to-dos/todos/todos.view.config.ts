///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SharedModule } from './../../../shared/shared.module';
import { TodosViewBaseComponent } from './todos.view.base.component';
import { TodosViewComponent } from './todos.view.component';
import { RouterModule } from '@angular/router';

import { TopSectionComponent } from './topSection';

export const config: NgModule = {
    declarations: [
        TodosViewBaseComponent,
        TodosViewComponent,
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

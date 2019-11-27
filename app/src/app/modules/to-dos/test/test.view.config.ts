///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { SharedModule } from './../../../shared/shared.module';
import { TestViewBaseComponent } from './test.view.base.component';
import { TestViewComponent } from './test.view.component';
import { RouterModule } from '@angular/router';

import { BottomSectionComponent } from './bottomSection';
import { MiddleSectionComponent } from './middleSection';
import { TopSectionComponent } from './topSection';

export const config: NgModule = {
    declarations: [
        TestViewBaseComponent,
        TestViewComponent,
        BottomSectionComponent,
        MiddleSectionComponent,
        TopSectionComponent
    ],
    entryComponents: [],
    exports: [
        BottomSectionComponent,
        MiddleSectionComponent,
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

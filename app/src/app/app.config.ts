///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpModule } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LayoutModule } from '@progress/kendo-angular-layout';

import { CoreModule } from './core/core.module';

import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { ApplicationModule } from './modules/application/application.module';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutViewModule } from './modules/application/app-layout/app-layout.view.module';

export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/translations/', '.json');
}

export const config = {
    declarations: [
        AppComponent,
        AuthCallbackComponent
    ],
    imports: [
        AppLayoutViewModule,
        BrowserModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [ HttpClient ]
            }
        }),
        LayoutModule,
        CoreModule,
        SharedModule,
        ApplicationModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
};

///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, OnInit, AfterViewInit, OnDestroy, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators/map';

import { TranslationsProvider } from '../../../core/translations.provider';
import { ModelDataResult } from '../../../core/data/model-data-result';
import { AuthorizationService } from '../../../core/auth/authorization.service';
import { DataService } from '../../../core/data/data.service';
import { DataServiceFactory } from '../../../core/data/data-service-factory';

import { State } from '@progress/kendo-data-query';


import { NotificationService } from './../../../core/notification/notification.service';
import { Notification } from './../../../core/notification/notification';

@Component({
    selector: 'kb-app-layout',
    templateUrl: './app-layout.view.component.html',
    styleUrls: ['./app-layout.view.component.css']
})
export class  AppLayoutViewBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    public $authorizationService: AuthorizationService;
        public $dataServices: { [key: string]: DataService<any> };
    public $dataServicesData: { [key: string]: Observable<any> };
    public $dataServicesResult: { [key: string]: BehaviorSubject<ModelDataResult<any>> };
    public $notificationService: NotificationService;

    public $dataServicesModel: { [key: string]: any } = {
    };
    public $dataServicesState: { [key: string]: State } = {
    };

    constructor(public injector: Injector) {
        this.$authorizationService = this.injector.get(AuthorizationService);
                this.$notificationService = this.injector.get(NotificationService);
        
        const dsConfig = this.getDataServicesConfig();
        this.$dataServices = {
        };
        this.$dataServicesData = {
        };
        this.$dataServicesResult = {
        };
        this.filterNavigationData();

        const translationsProvider = this.injector.get(TranslationsProvider);
        translationsProvider.useDefaultLanguage();
    }

    public $config: any = {
        components: {
            image0: {
        width: '260',
            height: '35',
        navigateUrl: '/',
    alt: ''
}
,
            languagesDdl: {
    data: this.getLanguages(),
    textField: 'label',
    valueField: 'key',
}
,
            userdropdown0: {}

        }
    };

    public $dataModels: any = {
    };

    public $navigationData = [
    {
        title: 'Projekte',
        titleKey: 'modules.Projekte.label',
        thumbnail: {
            background: '#00a2e8',
            color: '#ffffff',
            icon: 'fa-group'
        },
        children: [

        ]
    },
    {
        title: 'ToDos',
        titleKey: 'modules.ToDos.label',
        thumbnail: {
            background: '#00a2e8',
            color: '#ffffff',
            icon: 'fa-calendar-check-o'
        },
        children: [
            {
                title: 'ToDos',
                titleKey: 'modules.ToDos.views.ToDos.label',
                label: 'ToDo Übersicht',
                routerLink: '/to-dos/to-dos',
                authorization: {
                    allowedRoles: [

                    ]
                }
            }
        ]
    }
]
;

    public ngOnInit(): void {
        this['onInit']();

        for (const dataSourceName of Object.keys(this.$dataServices)) {
            this.read(dataSourceName);
            this.dataServiceErrors(dataSourceName);
        }
    }

    public ngAfterViewInit(): void {
        this['onShow']();
    }

    public ngOnDestroy(): void {
        this['onHide']();
    }

    public getLanguages(): any[] {
        return [
    {
        label: 'English',
        culture: 'en-US',
        order: 0,
        key: 'translations.default'
    }
]
;
    }

    private filterNavigationData(): void {
        this.$navigationData.forEach(module => {
            const views = module.children.filter(
                view => this.$authorizationService.isAuthorized(view.authorization));
            module.children = views;
        });

        this.$navigationData = this.$navigationData.filter(module => module.children.length);
    }

    public read(dataSourceName): void {
        this.$dataServices[dataSourceName].read();
    }

    public getDataChanges(dataSourceName): Observable<any[]> {
        const dataService = this.$dataServices[dataSourceName];
        return dataService.dataChanges()
            .pipe(
                map(response => response ? response.data : [])
            );
    }

    public getDataResult(dataSourceName): BehaviorSubject<ModelDataResult<any>> {
        return this.$dataServices[dataSourceName].dataChanges();
    }

    public dataServiceErrors(dataSourceName): void {
        this.$dataServices[dataSourceName].errors.subscribe((err: any) => {
            if (err) {
                const message = (err.error && err.error.message) || err.message;
                this.$notificationService.notify(new Notification(`<ul><li>${message}<li></ul>`, 'error', 10000));
            }
        });
    }
    
    protected getDataServicesConfig() {
        const config = {
        };

        return config;
    }
}

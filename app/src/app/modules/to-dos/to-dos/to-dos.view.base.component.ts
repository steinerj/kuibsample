///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, ViewEncapsulation, OnInit, AfterViewInit, OnDestroy, Injector } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { map } from 'rxjs/operators/map';

import { State } from '@progress/kendo-data-query';

import { ModelDataResult } from '../../../core/data/model-data-result';
import { DataService } from '../../../core/data/data.service';
import { DataServiceFactory } from '../../../core/data/data-service-factory';
import { ProgressServiceFactory } from '../../../core/data/progress-service-factory';
import { AwsToDo } from '../../../data/aws/to-do.model';
import { getToDoConfig } from '../../../data/aws/to-do.config';

import { NotificationService } from './../../../core/notification/notification.service';
import { Notification } from './../../../core/notification/notification';

@Component({
    templateUrl: './to-dos.view.component.html',
    styleUrls: ['./to-dos.view.component.css']
})
export class ToDosViewBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    public $progressServiceFactory: ProgressServiceFactory;
    public $dataServices: { [key: string]: DataService<any> };
    public $dataServicesData: { [key: string]: Observable<any> };
    public $dataServicesResult: { [key: string]: BehaviorSubject<ModelDataResult<any>> };
    public $notificationService: NotificationService;

    public $dataServicesModel: { [key: string]: any } = {
        'TodoDS': {
            'createModel': () => new AwsToDo()
        }
    };
    public $dataServicesState: { [key: string]: State } = {
        'TodoDS': {
    skip: 0,
    take: 20
}
    };

    constructor(public injector: Injector) {
        this.$progressServiceFactory = this.injector.get(ProgressServiceFactory);
        this.$notificationService = this.injector.get(NotificationService);
        
        const dsConfig = this.getDataServicesConfig();
        this.$dataServices = {
            'TodoDS':
                this.$progressServiceFactory.getService<AwsToDo>(
                    dsConfig['TodoDS'],
                    this.$dataServicesState['TodoDS']
                )
        };
        this.$dataServicesData = {
            'TodoDS': this.getDataChanges('TodoDS')
        };
        this.$dataServicesResult = {
            'TodoDS': this.getDataResult('TodoDS')
        };
    }

    public $config: any = {
        components: {
            grid0 : {
    filterable: true,
    groupable: false,
    pageable: this.$dataServicesState['TodoDS'].take !== undefined,
    reorderable: true,
    resizable: true,
    sortable: true,
    commandColumnWidth: 220,
    editing: {
        mode: 'Popup'
    },
    createModel: () => this.$dataServicesModel['TodoDS'].createModel()
    ,
    events: {
                            }

},
            ctl189 : {
    placeholderKey: 'modules.ToDos.views.ToDos.components.grid0.components.ctl189.placeholder',
    name: 'taskart',
    value: '',
    title: 'Taskart',
    debounce: 0
}
,
            ctl68 : {
    placeholderKey: 'modules.ToDos.views.ToDos.components.grid0.components.ctl68.placeholder',
    name: 'kunde',
    value: '',
    title: 'Kunden Alias',
    debounce: 0
}
,
            ctl69 : {
    placeholderKey: 'modules.ToDos.views.ToDos.components.grid0.components.ctl69.placeholder',
    name: 'taskname',
    value: '',
    title: 'Taskname',
    debounce: 0
}
,
            ctl71 : {
    placeholderKey: 'modules.ToDos.views.ToDos.components.grid0.components.ctl71.placeholder',
    downArrowText: '',
        format: 'n0',
    decimals: 0,
                step: 1,
        title: 'Angebotsnummer',
    upArrowText : '',
    spinners: false
}
,
            ctl64 : {
    placeholderKey: 'modules.ToDos.views.ToDos.components.grid0.components.ctl64.placeholder',
    downArrowText: '',
        format: 'n0',
    decimals: 0,
                step: 1,
        title: 'ID',
    upArrowText : '',
    spinners: false
}
,
            ctl76 : {
        value: false,
        title: 'bereit für erledigen?',
    disabled: false
}
,
            ctl218 : {
        value: false,
        title: 'Workf.Erfolg',
    disabled: false
}
,
            ctl219 : {
    placeholderKey: 'modules.ToDos.views.ToDos.components.grid0.components.ctl219.placeholder',
    name: 'wfl_erfolg_frage',
    value: '',
    title: 'Wfl Erfolg Frage',
    debounce: 0
}
,
            ctl73 : {
    placeholderKey: 'modules.ToDos.views.ToDos.components.grid0.components.ctl73.placeholder',
    name: 'wfl_bez',
    value: '',
    title: 'Workflow Bezeichnung',
    debounce: 0
}
,
            ctl78 : {
    placeholderKey: 'modules.ToDos.views.ToDos.components.grid0.components.ctl78.placeholder',
    downArrowText: '',
        format: 'n0',
    decimals: 0,
                step: 1,
        title: 'Taskstatus',
    upArrowText : '',
    spinners: false
}

        }
    };

    public $dataModels: any = {
        TodoDSModel: new AwsToDo()
    };

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
            'TodoDS': getToDoConfig(),
        };

        return config;
    }
}

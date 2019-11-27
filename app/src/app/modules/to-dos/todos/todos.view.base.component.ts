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
import { AwsdemoToDo } from '../../../data/awsdemo/to-do.model';
import { getToDoConfig } from '../../../data/awsdemo/to-do.config';

import { NotificationService } from './../../../core/notification/notification.service';
import { Notification } from './../../../core/notification/notification';

@Component({
    templateUrl: './todos.view.component.html',
    styleUrls: ['./todos.view.component.css']
})
export class TodosViewBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    public $progressServiceFactory: ProgressServiceFactory;
    public $dataServices: { [key: string]: DataService<any> };
    public $dataServicesData: { [key: string]: Observable<any> };
    public $dataServicesResult: { [key: string]: BehaviorSubject<ModelDataResult<any>> };
    public $notificationService: NotificationService;

    public $dataServicesModel: { [key: string]: any } = {
        'awsSource': {
            'createModel': () => new AwsdemoToDo()
        }
    };
    public $dataServicesState: { [key: string]: State } = {
        'awsSource': {
    skip: 0,
    take: 20
}
    };

    constructor(public injector: Injector) {
        this.$progressServiceFactory = this.injector.get(ProgressServiceFactory);
        this.$notificationService = this.injector.get(NotificationService);
        
        const dsConfig = this.getDataServicesConfig();
        this.$dataServices = {
            'awsSource':
                this.$progressServiceFactory.getService<AwsdemoToDo>(
                    dsConfig['awsSource'],
                    this.$dataServicesState['awsSource']
                )
        };
        this.$dataServicesData = {
            'awsSource': this.getDataChanges('awsSource')
        };
        this.$dataServicesResult = {
            'awsSource': this.getDataResult('awsSource')
        };
    }

    public $config: any = {
        components: {
            grid0 : {
    filterable: true,
    groupable: true,
    pageable: this.$dataServicesState['awsSource'].take !== undefined,
    reorderable: true,
    resizable: true,
    sortable: true,
    commandColumnWidth: 220,
    editing: {
        mode: 'Popup'
    },
    createModel: () => this.$dataServicesModel['awsSource'].createModel()
    ,
    events: {
                            }

},
            ctl9 : {
    placeholderKey: 'modules.ToDos.views.todos.components.grid0.components.ctl9.placeholder',
    name: 'wfl_bez',
    value: '',
    title: 'Workflow Bezeichnung',
    debounce: 0
}
,
            ctl4 : {
    placeholderKey: 'modules.ToDos.views.todos.components.grid0.components.ctl4.placeholder',
    name: 'kunde',
    value: '',
    title: 'Kunden Alias',
    debounce: 0
}
,
            ctl6 : {
    placeholderKey: 'modules.ToDos.views.todos.components.grid0.components.ctl6.placeholder',
    name: 'task',
    value: '',
    title: 'Task ID',
    debounce: 0
}
,
            ctl7 : {
    placeholderKey: 'modules.ToDos.views.todos.components.grid0.components.ctl7.placeholder',
    downArrowText: '',
        format: 'n0',
    decimals: 0,
                step: 1,
        title: 'Angebotsnummer',
    upArrowText : '',
    spinners: false
}
,
            ctl0 : {
    placeholderKey: 'modules.ToDos.views.todos.components.grid0.components.ctl0.placeholder',
    downArrowText: '',
        format: 'n0',
    decimals: 0,
                step: 1,
        title: 'ID',
    upArrowText : '',
    spinners: false
}
,
            ctl10 : {
        value: false,
        title: 'Workf.Erfolg',
    disabled: false
}
,
            ctl14 : {
    placeholderKey: 'modules.ToDos.views.todos.components.grid0.components.ctl14.placeholder',
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
        awsSourceModel: new AwsdemoToDo()
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
            'awsSource': getToDoConfig(),
        };

        return config;
    }
}

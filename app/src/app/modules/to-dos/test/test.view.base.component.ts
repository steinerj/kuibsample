///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Injector, ViewChild, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { State } from '@progress/kendo-data-query';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import { KbGridComponent } from '../../../shared/components/grid/grid.component';
import { ModelDataResult } from '../../../core/data/model-data-result';

import { DataService } from '../../../core/data/data.service';
import { DataServiceFactory } from '../../../core/data/data-service-factory';
import { ProgressServiceFactory } from '../../../core/data/progress-service-factory';
import { Awsdemo2ToDo } from '../../../data/awsdemo-2/to-do.model';
import { getToDoConfig } from '../../../data/awsdemo-2/to-do.config';

import { NotificationService } from './../../../core/notification/notification.service';
import { Notification } from './../../../core/notification/notification';

@Component({
    templateUrl: './test.view.component.html',
    styleUrls: ['./test.view.component.css']
})
export class TestViewBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    @ViewChild('grid') public $grid: KbGridComponent;

    public $progressServiceFactory: ProgressServiceFactory;
    public $dataServices: { [key: string]: DataService<any> };
    public $dataServicesData: { [key: string]: Observable<any> };
    public $dataServicesResult: { [key: string]: BehaviorSubject<ModelDataResult<any>> };
    public $notificationService: NotificationService;

    public $dataServicesModel: { [key: string]: any } = {
        'ToDo': {
            'createModel': () => new Awsdemo2ToDo()
        }
    };
    public $dataServicesState: { [key: string]: State } = {
        'ToDo': {
    skip: 0,
    take: 20
}
    };

    public $config: any = {
    title: '&lt;Title&gt;',
    titleKey: 'modules.ToDos.views.test.title',
    grid: {
        filterable: false,
        groupable: false,
        pageable: this.$dataServicesState['ToDo'].take !== undefined,
        pageSize: 20,
        reorderable: false,
        resizable: false,
        sortable: false,
        commandColumnWidth: 220,
        editing: {
            mode: 'Popup'
        },
        createModel: () => this.$dataServicesModel['ToDo'].createModel()
        ,
        events: {
                onRowSelect: (e) => {
            this['onRowSelect'](e);
        }
                        }

    },
    components: {
    ctl32 : {
    placeholderKey: 'modules.ToDos.views.test.components.ctl32.placeholder',
    downArrowText: '',
        format: 'n0',
    decimals: 0,
                step: 1,
        title: 'ID',
    upArrowText : '',
    spinners: false
}
 , 
    ctl33 : {
    placeholderKey: 'modules.ToDos.views.test.components.ctl33.placeholder',
    downArrowText: '',
        format: 'n0',
    decimals: 0,
                step: 1,
        title: 'Dok ID',
    upArrowText : '',
    spinners: false
}
 , 
    ctl34 : {
    placeholderKey: 'modules.ToDos.views.test.components.ctl34.placeholder',
    downArrowText: '',
        format: 'n0',
    decimals: 0,
                step: 1,
        title: 'Projekt ID',
    upArrowText : '',
    spinners: false
}
 , 
    ctl35 : {
    placeholderKey: 'modules.ToDos.views.test.components.ctl35.placeholder',
    downArrowText: '',
        format: 'n0',
    decimals: 0,
                step: 1,
        title: 'Projekt Dok ID',
    upArrowText : '',
    spinners: false
}
 , 
    ctl36 : {
    placeholderKey: 'modules.ToDos.views.test.components.ctl36.placeholder',
    name: 'kunde',
    value: '',
    title: 'Kunden Alias',
    debounce: 0
}
 , 
    ctl37 : {
    placeholderKey: 'modules.ToDos.views.test.components.ctl37.placeholder',
    name: 'taskname',
    value: '',
    title: 'Taskname',
    debounce: 0
}
 , 
    ctl38 : {
    placeholderKey: 'modules.ToDos.views.test.components.ctl38.placeholder',
    name: 'task',
    value: '',
    title: 'Task ID',
    debounce: 0
}
 , 
    ctl39 : {
    placeholderKey: 'modules.ToDos.views.test.components.ctl39.placeholder',
    downArrowText: '',
        format: 'n0',
    decimals: 0,
                step: 1,
        title: 'Angebotsnummer',
    upArrowText : '',
    spinners: false
}
 , 
    ctl40 : {
    placeholderKey: 'modules.ToDos.views.test.components.ctl40.placeholder',
    downArrowText: '',
        format: 'n0',
    decimals: 0,
                step: 1,
        title: 'Angebots Pos.',
    upArrowText : '',
    spinners: false
}
 , 
    ctl41 : {
    placeholderKey: 'modules.ToDos.views.test.components.ctl41.placeholder',
    name: 'wfl_bez',
    value: '',
    title: 'Workflow Bezeichnung',
    debounce: 0
}
 , 
    ctl42 : {
        value: false,
        title: 'Workf.Erfolg',
    disabled: false
}
 , 
    ctl43 : {
    placeholderKey: 'modules.ToDos.views.test.components.ctl43.placeholder',
    name: 'wfl_erfolg_frage',
    value: '',
    title: 'Wfl Erfolg Frage',
    debounce: 0
}
 , 
    ctl44 : {
        value: false,
        title: 'bereit für erledigen?',
    disabled: false
}
 , 
    ctl45 : {
    placeholderKey: 'modules.ToDos.views.test.components.ctl45.placeholder',
    name: 'taskart',
    value: '',
    title: 'Taskart',
    debounce: 0
}
 , 
    ctl46 : {
    placeholderKey: 'modules.ToDos.views.test.components.ctl46.placeholder',
    downArrowText: '',
        format: 'n0',
    decimals: 0,
                step: 1,
        title: 'Taskstatus',
    upArrowText : '',
    spinners: false
}
 , 
    ctl47 : {
    placeholderKey: 'modules.ToDos.views.test.components.ctl47.placeholder',
    name: 'bearbeiter',
    value: '',
    title: 'User ID',
    debounce: 0
}

}

    };

    constructor(public injector: Injector) {
        this.$progressServiceFactory = this.injector.get(ProgressServiceFactory);
        this.$notificationService = this.injector.get(NotificationService);
        
        const dsConfig = this.getDataServicesConfig();
        this.$dataServices = {
            'ToDo':
                this.$progressServiceFactory.getService<Awsdemo2ToDo>(
                    dsConfig['ToDo'],
                    this.$dataServicesState['ToDo']
                )
        };
        this.$dataServicesData = {
            'ToDo': this.getDataChanges('ToDo')
        };
        this.$dataServicesResult = {
            'ToDo': this.getDataResult('ToDo')
        };
    }

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
            'ToDo': getToDoConfig(),
        };

        return config;
    }
}

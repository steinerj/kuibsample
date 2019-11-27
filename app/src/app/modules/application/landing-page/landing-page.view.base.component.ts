///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, ViewEncapsulation, OnInit, AfterViewInit, OnDestroy, Injector } from '@angular/core';
import { TranslationsProvider } from '../../../core/translations.provider';
import { AuthorizationService } from '../../../core/auth/authorization.service';

@Component({
    templateUrl: './landing-page.view.component.html',
    styleUrls: ['./landing-page.view.component.css']
})
export class LandingPageViewBaseComponent implements OnInit, AfterViewInit, OnDestroy {
    public $authorizationService: AuthorizationService;

    public $modules = [{
        description: '',
        thumbnail: {
            background: '#00a2e8',
            color: '#ffffff',
            icon: 'fa-group',
        },
        label: 'Projekte',
        labelKey: 'modules.Projekte.label',
        name: 'Projekte',
        url: 'projekte',
        children: [] as View[]
    }, {
        description: '',
        thumbnail: {
            background: '#00a2e8',
            color: '#ffffff',
            icon: 'fa-calendar-check-o',
        },
        label: '',
        labelKey: 'modules.ToDos.label',
        name: 'ToDos',
        url: 'to-dos',
        children: [{
            name: 'ToDos',
            routerLink: '/to-dos/to-dos',
            authorization: {
    allowedRoles: [

    ]
}

        }] as View[]
    }];

    constructor(public injector: Injector) {
        this.$authorizationService = this.injector.get(AuthorizationService);

        this.filterModules();

        const translationsProvider = this.injector.get(TranslationsProvider);
        translationsProvider.useDefaultLanguage();
    }

    public ngOnInit(): void {
        this['onInit']();
    }

    public ngAfterViewInit(): void {
        this['onShow']();
    }

    public ngOnDestroy(): void {
        this['onHide']();
    }

    private filterModules(): void {
        this.$modules.forEach(module => {
            module.children = module.children.filter(
                view => this.$authorizationService.isAuthorized(view.authorization));
        });

        this.$modules = this.$modules.filter(m => m.children.length);
    }
}

interface View {
    name: string;
    routerLink: string;
    authorization: {
        allowedRoles: any[];
    };
}

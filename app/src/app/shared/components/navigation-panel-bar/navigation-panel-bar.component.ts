///////////////////
// Auto-generated
// Do not edit!!!
///////////////////
import { Component, Input, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { LayoutModule, PanelBarComponent, PanelBarItemModel } from '@progress/kendo-angular-layout';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { of } from 'rxjs/observable/of';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { merge } from 'rxjs/observable/merge';
import { map } from 'rxjs/operators/map';
import { distinctUntilChanged, filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { camelCase } from 'lodash';

@Component({
    selector: 'kb-navigation-panel-bar',
    templateUrl: './navigation-panel-bar.component.html'
})
export class KbNavigationPanelBarComponent implements OnInit, OnDestroy {
    @Input() public config: any;
    @Input() public id: string;
    @Input() public navigationData: any;
    @ViewChild('nav') public nav: PanelBarComponent;

    private screenMd = 1024;
    private isMobile: Observable<boolean>;
    private subscription: Subscription;

    constructor(public router: Router) {
        const initialWindowWidth = of(window.innerWidth < this.screenMd);
        const currentWindowWidth = fromEvent(window, 'resize').pipe(map((event: any) => {
            return event.target.innerWidth < this.screenMd;
        }));

        this.isMobile = merge(initialWindowWidth, currentWindowWidth)
            .pipe(
                distinctUntilChanged(),
                filter(v => v === true)
            );
    }

    public stateChange(items: Array<PanelBarItemModel>) {

        this.nav.contentChildItems.forEach((item, index) => {
            this.navigationData[index].expanded = item.expanded;
        });

        if (window.innerWidth < this.screenMd) {
            document.querySelector('.kb-side-navigation').classList.remove('kb-mobile-navigation');
        }
    }

    ngOnInit() {
        this.navigationData.forEach((m, i) => {
            if (camelCase(this.router.url.split('/')[1]) === camelCase(m.title)) {
                this.navigationData[i].expanded = true;
            } else {
                this.navigationData[i].expanded = false;
            }
        });

        this.subscription = this.isMobile.subscribe(() => {
            this.navigationData.forEach(m => m.expanded = false);
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}

import { CurrencyPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, switchMap } from 'rxjs';

import { SummaryApi } from '@api/summary-api';
import { Navbar } from '@components/navbar/navbar';
import { CreateIntervalModal } from './create-interval-modal/create-interval-modal';

@Component({
    selector: 'app-dashboard-view',
    imports: [ CurrencyPipe, Navbar ],
    templateUrl: './dashboard-view.html',
    styleUrl: './dashboard-view.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardView {
    private readonly summaryApi = inject(SummaryApi);
    private readonly modalService = inject(NgbModal);

    private readonly reload$ = new BehaviorSubject<void>(undefined);

    protected readonly summary = toSignal(
        this.reload$.pipe(switchMap(() => this.summaryApi.getExpensesSummary())),
    );

    protected openCreateIntervalModal(): void {
        const modalRef = this.modalService.open(CreateIntervalModal);

        modalRef.closed.subscribe(() => this.reload$.next());
    }
}

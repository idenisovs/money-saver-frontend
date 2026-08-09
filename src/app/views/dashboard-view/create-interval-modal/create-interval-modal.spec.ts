import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { CreateIntervalModal } from './create-interval-modal';

describe('CreateIntervalModal', () => {
    let component: CreateIntervalModal;
    let fixture: ComponentFixture<CreateIntervalModal>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CreateIntervalModal],
            providers: [
                provideHttpClient(),
                provideHttpClientTesting(),
                {
                    provide: NgbActiveModal,
                    useValue: {
                        close: () => undefined,
                        dismiss: () => undefined,
                    },
                },
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(CreateIntervalModal);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

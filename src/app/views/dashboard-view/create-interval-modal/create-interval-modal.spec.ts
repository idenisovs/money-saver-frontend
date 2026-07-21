import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateIntervalModal } from './create-interval-modal';

describe('CreateIntervalModal', () => {
    let component: CreateIntervalModal;
    let fixture: ComponentFixture<CreateIntervalModal>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [CreateIntervalModal],
        }).compileComponents();

        fixture = TestBed.createComponent(CreateIntervalModal);
        component = fixture.componentInstance;
        await fixture.whenStable();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

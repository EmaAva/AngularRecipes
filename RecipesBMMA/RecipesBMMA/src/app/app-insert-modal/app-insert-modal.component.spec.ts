import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppInsertModalComponent } from './app-insert-modal.component';

describe('AppInsertModalComponent', () => {
  let component: AppInsertModalComponent;
  let fixture: ComponentFixture<AppInsertModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppInsertModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppInsertModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

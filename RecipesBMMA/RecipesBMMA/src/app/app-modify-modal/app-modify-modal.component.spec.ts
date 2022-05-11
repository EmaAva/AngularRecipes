import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppModifyModalComponent } from './app-modify-modal.component';

describe('AppModifyModalComponent', () => {
  let component: AppModifyModalComponent;
  let fixture: ComponentFixture<AppModifyModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppModifyModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppModifyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

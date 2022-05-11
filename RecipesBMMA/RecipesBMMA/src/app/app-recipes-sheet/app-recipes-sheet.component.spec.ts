import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppRecipesSheetComponent } from './app-recipes-sheet.component';

describe('AppRecipesSheetComponent', () => {
  let component: AppRecipesSheetComponent;
  let fixture: ComponentFixture<AppRecipesSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppRecipesSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppRecipesSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

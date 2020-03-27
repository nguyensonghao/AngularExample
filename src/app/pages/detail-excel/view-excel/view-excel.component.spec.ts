import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExcelComponent } from './view-excel.component';

describe('ViewExcelComponent', () => {
  let component: ViewExcelComponent;
  let fixture: ComponentFixture<ViewExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

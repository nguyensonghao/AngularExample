import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExcelComponent } from './list-excel.component';

describe('ListExcelComponent', () => {
  let component: ListExcelComponent;
  let fixture: ComponentFixture<ListExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

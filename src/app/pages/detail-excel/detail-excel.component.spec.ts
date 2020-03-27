import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailExcelComponent } from './detail-excel.component';

describe('DetailExcelComponent', () => {
  let component: DetailExcelComponent;
  let fixture: ComponentFixture<DetailExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

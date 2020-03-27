import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewExcelComponent } from './preview-excel.component';

describe('PreviewExcelComponent', () => {
  let component: PreviewExcelComponent;
  let fixture: ComponentFixture<PreviewExcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewExcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

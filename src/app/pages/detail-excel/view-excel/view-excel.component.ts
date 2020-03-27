import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'view-excel',
  templateUrl: './view-excel.component.html',
  styleUrls: ['./view-excel.component.scss']
})
export class ViewExcelComponent {
  @Input() employee: Object;
  @Output() change = new EventEmitter<boolean>();

  hide = () => {
    this.change.emit();
  }
}

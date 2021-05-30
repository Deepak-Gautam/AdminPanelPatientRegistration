import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text!: string;
  @Input() color!: string;
  @Output() onBtnCLick = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  onClick(): void {
    this.onBtnCLick.emit();
  }
}

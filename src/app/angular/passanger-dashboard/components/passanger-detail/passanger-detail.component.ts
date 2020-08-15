import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Passanger } from 'src/app/angular/models/passanger.model';

@Component({
  selector: 'passanger-detail',
  templateUrl: 'passanger-detail.html',
  styleUrls: ['passanger-detail.scss'],
})
export class PassangerDetailComponent implements OnInit {
  // Pass data from parent to child with input binding
  @Input()
  detail: Passanger;

  // pass data from child to parent
  @Output()
  edit: EventEmitter<any> = new EventEmitter();
  @Output()
  remove: EventEmitter<any> = new EventEmitter();

  // wether user is editing text or not
  editing: boolean = false;

  constructor() {}

  ngOnInit() {
    // console.log('detail component:', this.detail);
  }

  onNameChange(value: string) {
    console.log('detail component on namechange: ', value);
    // saves changed value but only in this component
    this.detail.fullname = value;
  }

  toggleEdit() {
    if(this.editing) {
      this.edit.emit(this.detail);
    }
    // toggle boolean value
    this.editing = !this.editing;
  }

  // emits event to container passa passanger as parameter
  onRemove() {
    this.remove.emit(this.detail);
  }
}

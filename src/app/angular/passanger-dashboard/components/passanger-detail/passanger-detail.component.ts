import { Component, OnInit, Input } from '@angular/core';
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

  constructor() {}

  ngOnInit() {
      console.log('detail component:', this.detail);
  }
}

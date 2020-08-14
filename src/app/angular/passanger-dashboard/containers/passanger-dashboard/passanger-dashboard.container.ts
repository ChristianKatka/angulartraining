import { Component, OnInit } from '@angular/core';

import { Passanger } from '../../../models/passanger.model';

@Component({
  selector: 'passanger-dashboard-container',
  styleUrls: ['passanger-dashboard.container.scss'],
  templateUrl: 'passanger-dashboard.container.html',
})
export class PassangerDashboardContainer implements OnInit {
  passangers: Passanger[];

  constructor() {}

  ngOnInit() {
    this.passangers = [
      {
        id: 1,
        fullname: 'john doe',
        checkedIn: true,
        checkInDate: null,
      },
      {
        id: 2,
        fullname: 'john doee',
        checkedIn: true,
        checkInDate: 12092020,
        children: [{ name: 'Hemmo', age: 1 }],
      },
      {
        id: 3,
        fullname: 'john dwoe',
        checkedIn: false,
        checkInDate: null,
      },
      {
        id: 4,
        fullname: 'johttn doe',
        checkedIn: true,
        checkInDate: null,
      },
    ]; 
  }
}

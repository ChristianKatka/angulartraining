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

  // changes fullname of the passanger
  handleEdit(event: Passanger) {
    // console.log('container, handleEdit(): ',  event);
    this.passangers = this.passangers.map((passanger: Passanger) => {
      if (passanger.id === event.id) {
        // päivitetään koko objecti eli korvataan passanger objecti uudella sisääntulleella event objektilla jolloin nimi muuttuu
        passanger = Object.assign(passanger, event);
        //  console.log('container if lauseen sisässä: ', passanger);
      }
      console.log(passanger);
      // returns modified version of the passangers
      return passanger;
    });
  }

  // removes choosen passanger from the array
  handleRemove(event: Passanger) {
    // console.log('container, handleremove: ', event);

    this.passangers = this.passangers.filter((passanger: Passanger) => {
      // palauttaa kaikki passangerit millä ei ole sama iidee kun parametris tarjotulla.
      return passanger.id != event.id;
      // eli poistaa sen passangerin minkä id mätchää parametrina tarjottuun iideeseen
    });

    //lyhyempi tapa mut ei kannata käyttää koska silloin ei voi määrittää tyyppiä
    // this.passangers = this.passangers.filter(passanger => passanger.id != event.id)
  }
}

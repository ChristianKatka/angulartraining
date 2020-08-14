import { Component, Input } from '@angular/core';
import { Passanger } from 'src/app/angular/models/passanger.model';

@Component({
    selector: 'passanger-count',
    templateUrl: 'passanger-count.html',
    styleUrls: ['passanger-count.scss']
})

export class PassangerCountComponent {

    @Input()
    items: Passanger[];

    /**
     * How many people have been checked in
     */
    checkedInCount(): number {
        if(!this.items) return;
        // short hand version
        // return this.items.filter((passanger: Passanger) => passanger.checkedIn).length
        // long versio
        return this.items.filter((passangers: Passanger) => {
            return passangers.checkedIn
        }).length
    }

}
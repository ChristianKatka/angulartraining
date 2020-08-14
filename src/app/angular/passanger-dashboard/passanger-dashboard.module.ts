// this is feature module

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// containers
import { PassangerDashboardContainer } from './containers/passanger-dashboard/passanger-dashboard.container';
// components
import { PassangerCountComponent } from './components/passanger-count/passanger-count.component';
import { PassangerDetailComponent } from './components/passanger-detail/passanger-detail.component';

@NgModule({
  declarations: [
    PassangerDashboardContainer,
    PassangerCountComponent,
    PassangerDetailComponent,
  ],
  imports: [CommonModule],
  exports: [
    // Remember to export or this component cant be used
    PassangerDashboardContainer,
    PassangerCountComponent,
    PassangerDetailComponent,
  ],
  providers: [],
})
export class PassangerDashboardModule {}

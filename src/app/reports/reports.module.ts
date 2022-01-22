import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { AreaComponent } from './area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [ReportsComponent, AreaComponent, CardComponent],
  imports: [CommonModule, ReportsRoutingModule, HighchartsChartModule],
  exports: [AreaComponent, CardComponent],
})
export class ReportsModule {}

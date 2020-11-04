import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TowerListRoutingModule } from './tower-list-routing.module';
import { MainListComponent } from './components/main-list/main-list.component';
import { StoreModule } from '@ngrx/store';
import { ChartsModule } from 'ng2-charts';
import { reducer } from '../../store/tower-reducer';
import { TowerCardComponent } from './components/tower-card/tower-card.component';
import { ChartComponent } from './components/chart/chart.component';
@NgModule({
  declarations: [MainListComponent, TowerCardComponent, ChartComponent],
  imports: [
    CommonModule,
    TowerListRoutingModule,
    ChartsModule,
    StoreModule.forFeature('towers', reducer)
  ],
  exports: [
  ],
})
export class TowerListModule { }

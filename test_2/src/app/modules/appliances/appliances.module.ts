import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppliancesRoutingModule } from './appliances-routing.module';
import { AppliancesComponent } from './components/appliances/appliances.component';
import { StoreModule } from '@ngrx/store' 
import { EffectsModule } from '@ngrx/effects' 
import { reducers } from './store/reducers';
import { ApplianceEffects } from './store/effects';



@NgModule({
  declarations: [
    AppliancesComponent
  ],
  imports: [
    CommonModule,
    AppliancesRoutingModule,
    StoreModule.forFeature('appliances', reducers),
    EffectsModule.forFeature([ApplianceEffects])
  ]
})
export class AppliancesModule { }

import { ComponentsModule } from 'src/app/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataTimePageRoutingModule } from './data-time-routing.module';

import { DataTimePage } from './data-time.page';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataTimePageRoutingModule,
    ComponentsModule
  ],
  declarations: [DataTimePage]
})
export class DataTimePageModule {}

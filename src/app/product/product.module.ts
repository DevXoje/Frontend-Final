import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppCommonModule } from '../app-common/app-common.module';

import * as productComponents from './components'

@NgModule({
  declarations: [...productComponents.components],
  imports: [
    CommonModule,
    AppCommonModule,
  ],
  exports: [...productComponents.components]
})
export class ProductModule { }

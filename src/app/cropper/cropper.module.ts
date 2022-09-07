import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { CropperRoutingModule } from './cropper-routing.module';
import { CropperComponent } from './cropper.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';

import { LyImageCropperModule } from '@alyle/ui/image-cropper';
import { LyButtonModule } from '@alyle/ui/button';
import { LySliderModule } from '@alyle/ui/slider';
import { LyIconModule } from '@alyle/ui/icon';


@NgModule({
  declarations: [
    CropperComponent
  ],
  imports: [
    CommonModule,
    CropperRoutingModule,
    MatDialogModule,
    SharedComponentsModule,

    LyImageCropperModule,
    LyButtonModule,
    LySliderModule,
    LyIconModule,
  ]
})
export class CropperModule { }

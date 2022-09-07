import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CropperModalComponent } from './cropper-modal/cropper-modal.component';



@NgModule({
  declarations: [
    CropperModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CropperModalComponent]
})
export class SharedComponentsModule { }

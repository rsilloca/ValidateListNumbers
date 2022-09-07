import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { Platform } from '@angular/cdk/platform';

import {
  STYLES as CROPPER_STYLES,
  LyImageCropper,
  ImgCropperConfig,
  ImgCropperEvent,
  ImgCropperErrorEvent,
  ImgCropperLoaderConfig,
  ImgResolution,
} from '@alyle/ui/image-cropper';
import { ThemeRef, ThemeVariables, lyl, StyleRenderer } from '@alyle/ui';
import { LySliderChange, STYLES as SLIDER_STYLES } from '@alyle/ui/slider';

const STYLES = (_theme: ThemeVariables, ref: ThemeRef) => {
  ref.renderStyleSheet(SLIDER_STYLES);
  ref.renderStyleSheet(CROPPER_STYLES);
  const slider = ref.selectorsOf(SLIDER_STYLES);
  const cropper = ref.selectorsOf(CROPPER_STYLES);

  return {
    root: lyl`{
      ${cropper.root} {
        max-width: 500px
        height: 500px
      }
      ${slider.root} {
        width: 100%
        max-width: 400px
        padding-left: 1em
        padding-right: 1em
      }
    }`,
    sliderContainer: lyl`{
      text-align: center
      max-width: 400px
      padding: 14px
      box-sizing: border-box
    }`,
  };
};

@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.scss'],
  providers: [StyleRenderer],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CropperComponent implements OnInit, AfterViewInit {

  @ViewChild(LyImageCropper, { static: true }) cropper: LyImageCropper | undefined;
  imageURL: string = "https://firebasestorage.googleapis.com/v0/b/alyle-ui.appspot.com/o/img%2Ftimothy-dykes-1zwiiaFER8Y-unsplash.jpg?alt=media&token=b4c3611b-8eb5-4add-94b9-8d85e58e334d"

  readonly classes = this.sRenderer.renderSheet(STYLES, 'root');
  myConfig: ImgCropperConfig = {
    // 3:1 aspect ratio
    width: 1600, // 100 * 4,
    height: 400, // 100 * 3,
    keepAspectRatio: true,
    responsiveArea: true,
    output: ImgResolution.OriginalImage,
  };
  croppedImage?: string;
  ready?: boolean;
  scale?: number;
  minScale?: number;
  maxScale?: number;

  constructor(readonly sRenderer: StyleRenderer, private _platform: Platform) { }

  ngAfterViewInit(): void {
    if (this._platform.isBrowser) {
      const config: ImgCropperLoaderConfig = {
        rotation: 0,
        xOrigin: 3235.7749135491986,
        yOrigin: 1711.626216978359,
        scale: 0.11451599999999999,
        originalDataURL:
          this.imageURL,
      };
      this.cropper?.loadImage(config);
    }
  }

  ngOnInit(): void {
  }

  loadImage($event: any) {
    console.log($event);
    this.cropper?.selectInputEvent($event);
  }




  onCropped(e: ImgCropperEvent) {
    this.croppedImage = e.dataURL;
    console.log('cropped img: ', e);
  }
  onLoaded(e: ImgCropperEvent) {
    console.log('img loaded', e);
  }
  onError(e: ImgCropperErrorEvent) {
    console.warn(`'${e.name}' is not a valid image`, e);
  }
  onSliderInput(event: LySliderChange) {
    this.scale = event.value as number;
  }

}

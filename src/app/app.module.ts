import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CropperModule } from './cropper/cropper.module';
import { SharedComponentsModule } from './shared-components/shared-components.module';



import { LY_THEME, LY_THEME_NAME, StyleRenderer, LyTheme2, lyl, ThemeRef } from '@alyle/ui';
import { MinimaLight } from '@alyle/ui/themes/minima';



export const STYLES = (theme: AppThemeVariables, ref: ThemeRef) => {
  const __ = ref.selectorsOf(STYLES);
  return {
    $global: () => lyl`{ }`,
    root: lyl`{ }`,
    exampleContainer: null
  };
};

export type AppThemeVariables = MinimaLight


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CropperModule,
    SharedComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    StyleRenderer,
    LyTheme2,
    { provide: LY_THEME_NAME, useValue: 'minima-light' },
    { provide: LY_THEME, useClass: MinimaLight, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

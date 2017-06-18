import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { throwIfAlreadyLoaded } from './utils';
import { rootReducer } from '../state/index';
import { initialState } from '../state/reducer';

@NgModule({
  imports: [
    BrowserModule,
    StoreModule.provideStore(rootReducer, initialState),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
  ],
  declarations: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterButtonComponent } from './home/components/filter-button/filter-button.component';
import { CountryItemComponent } from './home/components/country-item/country-item.component';
import { CountryPageComponent } from './country-page/country-page.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/app/app.effects';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { LoadingLetterComponent } from './shared/components/loading-letter/loading-letter.component';
import { ErrorStatusComponent } from './shared/components/error-status/error-status.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterButtonComponent,
    CountryItemComponent,
    CountryPageComponent,
    LoadingComponent,
    LoadingLetterComponent,
    ErrorStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ app: appReducer }),
    EffectsModule.forRoot([AppEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

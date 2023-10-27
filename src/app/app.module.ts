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
import { countryReducer } from './store/country/country.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/app/app.effects';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { LoadingLetterComponent } from './shared/components/loading-letter/loading-letter.component';
import { ErrorStatusComponent } from './shared/components/error-status/error-status.component';
import { CountryEffects } from './store/country/country.effects';
import { MapEmbedComponent } from './country-page/components/map-embed/map-embed.component';
import { NgLeafletUniversalModule } from 'ng-leaflet-universal';
import { HeaderComponent } from './shared/components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterButtonComponent,
    CountryItemComponent,
    CountryPageComponent,
    LoadingComponent,
    LoadingLetterComponent,
    ErrorStatusComponent,
    MapEmbedComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ app: appReducer, country: countryReducer }),
    EffectsModule.forRoot([AppEffects, CountryEffects]),

    NgLeafletUniversalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

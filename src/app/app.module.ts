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
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './store/app/app.effects';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { LoadingLetterComponent } from './shared/components/loading-letter/loading-letter.component';
import { ErrorStatusComponent } from './shared/components/error-status/error-status.component';
import { CountryEffects } from './store/country/country.effects';
import { MapEmbedComponent } from './country-page/components/map-embed/map-embed.component';
import { NgLeafletUniversalModule } from 'ng-leaflet-universal';
import { HeaderComponent } from './shared/components/header/header.component';
import { FormContentComponent } from './home/components/form-content/form-content.component';
import { AnimatedInputComponent } from './home/components/animated-input/animated-input.component';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputFieldComponent } from './auth/components/input-field/input-field.component';
import { rootStore } from './store';
import { AuthEffects } from './store/auth/auth.effects';


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
    FormContentComponent,
    AnimatedInputComponent,
    AuthComponent,
    InputFieldComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(rootStore),
    EffectsModule.forRoot([AppEffects, CountryEffects, AuthEffects]),
    MatIconModule,
    NgLeafletUniversalModule,
    NoopAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

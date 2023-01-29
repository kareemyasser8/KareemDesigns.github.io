import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoverPageComponent } from './cover-page/cover-page.component';
import { LatestArtworksComponent } from './latest-artworks/latest-artworks.component';
import { FeaturedByComponent } from './featured-by/featured-by.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CoverPageComponent,
    LatestArtworksComponent,
    FeaturedByComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

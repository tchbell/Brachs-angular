import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CopyImageComponent } from './components/copy-image/copy-image.component';
import { FullBleedComponent } from './components/full-bleed/full-bleed.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselCardComponent } from './components/carousel-card/carousel-card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    HomeComponent,
    HeaderComponent,
    CopyImageComponent,
    FullBleedComponent,
    FooterComponent,
    CarouselCardComponent,
    CarouselComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

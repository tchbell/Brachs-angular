import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { HeaderComponent } from './components/header/header.component';
import { CopyImageComponent } from './components/copy-image/copy-image.component';
import { FullBleedComponent } from './components/full-bleed/full-bleed.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarouselCardComponent } from './components/carousel-card/carousel-card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'components/header', component: HeaderComponent },
  { path: 'components/hero', component: HeroComponent },
  { path: 'components/copy-image', component: CopyImageComponent },
  { path: 'components/full-bleed', component: FullBleedComponent },
  { path: 'components/footer', component: FooterComponent },
  { path: 'components/carousel-card', component: CarouselCardComponent },
  { path: 'components/carousel', component: CarouselComponent },
  { path: 'pages/product-detail', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

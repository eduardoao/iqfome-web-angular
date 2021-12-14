import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { HeadermenuComponent } from './headermenu/headermenu.component';
import { HeadercartComponent } from './headercart/headercart.component';
import { CategoriesComponent } from './categories/categories.component';
import { SearchComponent } from './search/search.component';
import { CardComponent } from './components/card/card.component';
import { BannerComponent } from './components/banner/banner.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { MenuhumbergerComponent } from './menuhumberger/menuhumberger.component';
import { FeaturedComponent } from './featured/featured.component';
import { AboutComponent } from './about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    HeadermenuComponent,
    HeadercartComponent,
    CategoriesComponent,
    SearchComponent,
    CardComponent,
    BannerComponent,
    CarouselComponent,
    FooterComponent,
    MenuhumbergerComponent,
    FeaturedComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'about', component: AboutComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

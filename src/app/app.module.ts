import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { FooterComponent } from './common/footer/footer.component';
import { CategoryDropdownComponent } from './components/category-dropdown/category-dropdown.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/pages/home/home.component';
import { InstructorDropdownComponent } from './components/instructor-dropdown/instructor-dropdown.component';
import { CardComponent } from './components/card/card.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';






@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CategoryDropdownComponent,
    HomeComponent,
    InstructorDropdownComponent,
    CardComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

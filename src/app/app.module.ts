import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { ReactiveFormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { BookComponent } from './book/book.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';
import { BarbersComponent } from './barbers/barbers.component';
import { BookServicesComponent } from './book/book-services/book-services.component';
import { BookBarbersComponent } from './book/book-barbers/book-barbers.component';
import { BookDateComponent } from './book/book-date/book-date.component';

const appRoutes: Routes = [
  { path: 'book', component: BookComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services',    component: ServicesComponent },
  { path: 'barbers',    component: BarbersComponent },
  { path: 'home',    component: HomeComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];








@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ServicesComponent,
    ContactComponent,
    BookComponent,
    PageNotFoundComponent,
    FooterComponent,
    BarbersComponent,
    BookServicesComponent,
    BookBarbersComponent,
    BookDateComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
    ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

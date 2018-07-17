import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { IntroPicComponent } from './homepage/intro-pic/intro-pic.component';
import { WhyUsComponent } from './homepage/why-us/why-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AddPropertyModalComponent } from './property-assets/add-property-modal/add-property-modal.component';
import { MyPropertiesComponent } from './property-assets/my-properties/my-properties.component';
import { PropertyListingComponent } from './property-assets/property-listing/property-listing.component';
import { LikedPropertiesComponent } from './property-assets/liked-properties/liked-properties.component';


import { Routes,RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { FilterCityPipe } from './property-assets/property-listing/filter-city.pipe';
import { SortPricePipe } from './property-assets/property-listing/sort-price.pipe';
import { PropertyDataService } from './property-assets/property-data.service';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { TokenInterceptorService } from './auth/token-interceptor.service';

const appRoutes:Routes= [
  { path:'',redirectTo:'/home',pathMatch:'full'},
  { path:"home",component:HomepageComponent},
  { path:"about_us",component:AboutUsComponent},
  { path:"my_properties",component:MyPropertiesComponent,canActivate:[AuthGuard]},
  { path:"liked_properties",component:LikedPropertiesComponent,canActivate:[AuthGuard]},
  { path:"properties",component:PropertyListingComponent},
  { path:"login",component:LoginComponent },
  { path:"register",component:RegisterComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    IntroPicComponent,
    WhyUsComponent,
    NavbarComponent,
    FooterComponent,
    AboutUsComponent,
    AddPropertyModalComponent,
    MyPropertiesComponent,
    PropertyListingComponent,
    LikedPropertiesComponent,
    FilterCityPipe,
    SortPricePipe,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
    
  ],
  providers: [PropertyDataService,AuthService,AuthGuard,{
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }

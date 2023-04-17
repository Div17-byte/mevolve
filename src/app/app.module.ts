import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FeaturesListComponent } from './components/features-list/features-list.component';
import { CustomizeOneComponent } from './components/customize-one/customize-one.component';
import { CustomizeTwoComponent } from './components/customize-two/customize-two.component';
import { CustomizeThreeComponent } from './components/customize-three/customize-three.component';
import { CustomizeFourComponent } from './components/customize-four/customize-four.component';
import { CustomizeFiveComponent } from './components/customize-five/customize-five.component';
import { VideoSectionComponent } from './components/video-section/video-section.component';
import { PlansAvailableComponent } from './components/plans-available/plans-available.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { HeaderComponent } from './modules/header/header.component';
import { FooterComponent } from './modules/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroSectionComponent,
    FeaturesListComponent,
    CustomizeOneComponent,
    CustomizeTwoComponent,
    CustomizeThreeComponent,
    CustomizeFourComponent,
    CustomizeFiveComponent,
    VideoSectionComponent,
    PlansAvailableComponent,
    ContactFormComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderComponent, FooterComponent],
})
export class AppModule {}

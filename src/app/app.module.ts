import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { ColapseComponent } from './layouts/colapse/colapse.component';
import { TackBoxComponent } from './tack-box/tack-box.component';
import { MainPageComponent } from './layouts/main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonSubComponent } from './layouts/button-sub/button-sub.component';
import { ThreeButtonBottomComponent } from './layouts/three-button-bottom/three-button-bottom.component';
import { ThreadbuilderComponent } from './threadbuilder/threadbuilder.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ColapseComponent,
    TackBoxComponent,
    MainPageComponent,
    ButtonSubComponent,
    ThreeButtonBottomComponent,
    ThreadbuilderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

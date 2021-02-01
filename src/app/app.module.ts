import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TopNavComponent } from './top-nav/top-nav.component';
import { BodyComponent } from './core/body/body.component';
import { HearchyComponent } from './core/body/hearchy/hearchy.component';
import { StepsComponent } from './core/body/steps/steps.component';
import { FormsComponent } from './core/body/forms/forms.component';
import { RadioComponent } from './core/body/forms/radio/radio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatStepperModule } from '@angular/material/stepper';
import { Forms2Component } from './core/body/forms2/forms2.component';
import { AppRoutingModule } from './app-routing.module';
import { Forms3Component } from './core/body/forms3/forms3.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './core/body/forms3/card/card.component';
import { ClickColorDirective } from './core/body/forms3/card/click-color.directive';



@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    BodyComponent,
    HearchyComponent,
    StepsComponent,
    FormsComponent,
    RadioComponent,
    Forms2Component,
    Forms3Component,
    CardComponent,
    ClickColorDirective
  ],
  imports: [
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    MatStepperModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

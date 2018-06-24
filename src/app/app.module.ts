import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { ColorComponent } from './color/color.component';
import { OuterComponent } from './outer/outer.component';
import { InnerComponent } from './inner/inner.component';
import { EventsComponent } from './events/events.component';
import { DirectivesComponent } from './directives/directives.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { CustomDirectiveDirective } from './custom-directive.directive';
import { ZoomCustomDirectiveDirective } from './zoom-custom-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    ColorComponent,
    OuterComponent,
    InnerComponent,
    EventsComponent,
    DirectivesComponent,
    CustomDirectiveComponent,
    CustomDirectiveDirective,
    ZoomCustomDirectiveDirective
  ],
  imports: [
    BrowserModule
    , FormsModule
    , HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

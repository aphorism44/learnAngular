import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { ColorComponent } from './color/color.component';
import { OuterComponent } from './outer/outer.component';
import { InnerComponent } from './inner/inner.component';
import { EventsComponent } from './events/events.component';
import { DirectivesComponent } from './directives/directives.component';
import { ZoomDirective } from './zoom.directive';
import { CustomeventComponent } from './customevent/customevent.component';
import { ChildComponent } from './child/child.component';
import { CharacterComponent } from './character/character.component';
import { DetailsComponent } from './details/details.component';
import { ObservableComponent } from './observable/observable.component';
import { InMemoryWebApiModule } from '../../node_modules/angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    ColorComponent,
    OuterComponent,
    InnerComponent,
    EventsComponent,
    DirectivesComponent,
    ZoomDirective,
    CustomeventComponent,
    ChildComponent,
    CharacterComponent,
    DetailsComponent,
    ObservableComponent,
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

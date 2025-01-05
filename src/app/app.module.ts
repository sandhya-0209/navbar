import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { ToggleListDirective } from './shared/directives/toggle-list.directive';
import { ToggleDirective } from './shared/directives/toggle.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ToggleListDirective,
    ToggleDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

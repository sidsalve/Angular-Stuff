import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParentComponent } from './using-output/parent/parent.component';
import { ChildComponent } from './using-output/child/child.component';
import { InpChildComponent } from './using-input/inp-child/inp-child.component';
import { InpParentComponent } from './using-input/inp-parent/inp-parent.component';
import { VChildComponent } from './using-view-child/v-child/v-child.component';
import { VParentComponent } from './using-view-child/v-parent/v-parent.component';
import { Comp1Component } from './using-subject/comp1/comp1.component';
import { Comp2Component } from './using-subject/comp2/comp2.component';
import { MessageService } from './using-subject/message.service';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    InpChildComponent,
    InpParentComponent,
    VChildComponent,
    VParentComponent,
    Comp1Component,
    Comp2Component,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

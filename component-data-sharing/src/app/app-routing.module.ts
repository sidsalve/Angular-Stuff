import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './using-output/parent/parent.component';
import { InpParentComponent } from './using-input/inp-parent/inp-parent.component';
import { VParentComponent } from './using-view-child/v-parent/v-parent.component';
import { Comp1Component } from './using-subject/comp1/comp1.component';
import { Comp2Component } from './using-subject/comp2/comp2.component';


const routes: Routes = [
  { 
    path:'using-output',
    component: ParentComponent
  },
  { 
    path:'using-input',
    component: InpParentComponent
  },
  { 
    path:'using-view-child',
    component: VParentComponent
  },
  {
    path: 'using-subject/comp1',
    component: Comp1Component
  },
  {
    path: 'using-subject/comp2',
    component: Comp2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

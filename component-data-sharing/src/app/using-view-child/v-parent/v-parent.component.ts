import { Component, OnInit, ViewChild } from '@angular/core';
import { VChildComponent } from '../v-child/v-child.component';

@Component({
  selector: 'app-v-parent',
  templateUrl: './v-parent.component.html',
  styleUrls: ['./v-parent.component.css']
})
export class VParentComponent implements OnInit {

  @ViewChild(VChildComponent, {static: false}) child;

  constructor() { }

  ngOnInit() {
  }

  message:string;

  ngAfterViewInit() {
    setTimeout(() => {
      this.message = this.child.message
    }, 0);
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-v-child',
  templateUrl: './v-child.component.html',
  styleUrls: ['./v-child.component.css']
})
export class VChildComponent implements OnInit {

  message = 'Hello Sid!';

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-inp-child',
  templateUrl: './inp-child.component.html',
  styleUrls: ['./inp-child.component.css']
})
export class InpChildComponent implements OnInit {

  @Input() childMessage: string;

  constructor() { }

  ngOnInit() {
  }

}

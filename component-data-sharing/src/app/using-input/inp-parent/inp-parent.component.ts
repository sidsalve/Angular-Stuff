import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inp-parent',
  templateUrl: './inp-parent.component.html',
  styleUrls: ['./inp-parent.component.css']
})
export class InpParentComponent implements OnInit {

  public parentMessage;
  
  constructor() { 
    setTimeout(() => {
    this.parentMessage = "Hi Siddharth...!!"
    }, 1000);
  
  }

  ngOnInit() {
  }

}

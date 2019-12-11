import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  constructor(
    private message: MessageService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  send(){
    this.message.clearMessage();
    this.message.sendMessage("hello siddharth");
    this.router.navigate(['using-subject/comp2']);
  }
}

import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  public msg1: any;
  subscription: Subscription;

  constructor(
    private message: MessageService
  ) {}
  ngOnInit() {
   this.subscription = this.message.getMessage().subscribe(
      result =>{
      if(result){
        this.msg1 = result;
        console.log(this.msg1);
        }
      }
    );
  }

//   ngOnDestroy() {
//     this.subscription.unsubscribe();
//  }

}

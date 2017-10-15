import { Component, OnInit, Input } from '@angular/core';
import * as Rx from 'rxjs';
@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {

  usertext;
  previousUserText;
  @Input('mo') messageObservable: Rx.Subject<any>;

  constructor() { }

  ngOnInit() {
    // this.messageObservable = new Rx.Subject();
  }

  

  onKey(event) {
    if (event.which === 13) {
      console.log(event, this.usertext);
      this.messageObservable.next(this.usertext);
      this.previousUserText = this.usertext;
      this.usertext = '';
    }else if(event.which === 38){
      this.usertext = this.previousUserText;
    }else{
      console.log(event.which);
    }
  }

  //rxOut(): Rx.Subject<any> {
  //  return this.output
  //}

}

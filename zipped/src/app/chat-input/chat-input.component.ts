import { Component, OnInit, Input } from '@angular/core';
import {UserService} from '../user.service';
import * as Rx from 'rxjs';
@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {

  usertext;
  previousUserText;
  type: string = 'free';
  // @Input('mo') messageObservable: Rx.Subject<any>;
  // inptut type controls the type of input required...
  // @Input('type') type:string = 'free';
  constructor(public user: UserService) { }

  ngOnInit() {
    // this.messageObservable = new Rx.Subject();
  }

  setInputType(type: string): void {
    this.type = type;
  }

  onKey(event) {
    if (event.which === 13) {
      console.log(event, this.usertext);
      // this.messageObservable.next(this.usertext);
      this.user.say(this.usertext); // .next(this.usertext);
      this.previousUserText = this.usertext;
      this.usertext = '';
    } else if (event.which === 38) {
      this.usertext = this.previousUserText;
    } else {
      // console.log(event.which);
    }
  }

  //rxOut(): Rx.Subject<any> {
  //  return this.output
  //}

}

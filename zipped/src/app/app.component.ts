import {Component, OnInit, Input, ViewChild, HostBinding} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import * as Rx from 'rxjs';
import {FredService} from './fred.service';
import {UserService} from './user.service';
import {ChatComponent} from './chat/chat.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'app works!';
  messagesObservable: Observable<any>;
  messageObservable: Rx.Subject<any>; // stream from message / user

  userMessages;

  fredsMessages: Rx.Subject<any>; // stream for fred
  @HostBinding('class') public cssClass;

  @ViewChild(ChatComponent) chat: ChatComponent;
  // @Input('onScroll') scrollChat;
  messages = [];
  showSpeed = 500;
  fullscreen;
  type: 'choice';

  constructor(public fred: FredService, public user: UserService) {
  }


  //scrollChat() {
  //  console.log('scroll chat');
  //}
  onDblClick() {
    // debugger;
    this.fullscreen = !this.fullscreen;

    this.cssClass = this.fullscreen ? 'app--fullscreen' : '';
  }

  ngOnInit() {


    this.messageObservable = new Rx.Subject(); // user

    // Messages in fred.
    this.fredsMessages = new Rx.Subject();

    // Rx.Subject in UserService
    this.userMessages = this.user.userMessage; //

    // i should get rid of these and just simulate ping pong with the other two streams
    // this is used for some "automated showing of messages" along with the zip function on the observable below ...
    this.messagesObservable = Observable.from([
      {title: "", type: "base", username: "Fred", date: "Oct 14th 2017 9:33", src: "./assets/fred.jpeg", class: 'message--left', message: "Hello Mario!"},
      {title: "", type: "base", username: "Mario", date: "Oct 14th 2017 9:34", src: "./assets/user.jpeg", class: 'message--right', message: "Hi Fred!"},
      {
        title: "", type: "base", username: "Fred", date: "Oct 14th 2017 9:36", src: "./assets/fred.jpeg", class: 'message--left',
        message: `How can I help you!<br>I'm an expert in <a class="message__link">finance</a> and <a class="message__link">planning</a>! `
      },
      {title: "", type: "base", username: "Mario", date: "Oct 14th 2017 9:37", src: "./assets/user.jpeg", class: 'message--right', message: "Good, I want to know about planning!!"},
      {title: "", type: "base", username: "Fred", date: "Oct 14th 2017 9:38", src: "./assets/fred.jpeg", class: 'message--left', message: "To properly plan for your &hellip;"},
      {title: "Graph", type: "graph", username: "Fred", date: "Oct 14th 2017 9:38", src: "./assets/fred.jpeg", class: 'message--left', message: "Please examine this graph. This is the percentage of &hellip;"},
      {title: "Simulation", type: "simulation", username: "Fred", date: "Oct 14th 2017 9:38", src: "./assets/fred.jpeg", class: 'message--left', message: "Use the provided controls to simulate a scenario. then click ok when you are OK with the results."},
      {title: "Make a choice!", type: "base", username: "Fred", date: "Oct 14th 2017 9:38", src: "./assets/fred.jpeg", class: 'message--left', message: "Please choose between A and B. A is more for conservative people, B is if you are eager to risk"},
      {title: "I should choose...", type: "choice", username: "Mario", date: "Oct 14th 2017 9:38", src: "./assets/user.jpeg", class: 'message--right', message: null},
      //{ title: "I should choose &hellip;", type: "choice", username: "Mario", date: "Oct 14th 2017 9:38", src: "./assets/user.jpeg", class: 'message--right', message: null },
      //{ title: "Are you thinking this ?", type: "comparison", username: "Fred", date: "Oct 14th 2017 9:38", src: "./assets/fred.jpeg", class: 'message--left', message: "Thinking..." },
      //{ title: "Are you thinking this ?", type: "simulation", username: "Fred", date: "Oct 14th 2017 9:38", src: "./assets/fred.jpeg", class: 'message--left', message: "Thinking..." },
    ]);

     this.messagesObservable.zip(
     Rx.Observable.interval(this.showSpeed), function (a, b) {
     return a;
     }).subscribe(
     value => {
     this.messages.push(value);
     this.chat.scrollChat();
     },
     null,
     null);

    // this is the actual chat coming from the free input, but is shoudl be now handled with the service
    // this.messageObservable.subscribe(value => {
    /*this.userMessages.subscribe(value => {
      //let template = {title: "", type: "base", username: "Mario", date: "Oct 14th 2017 9:37", src: "./assets/user.jpeg", class: 'message--right', message: value};
      this.messages.push(value);
      // debugger;
      this.chat.scrollChat();

      // fred messages as jubject, user message as value, for further analysis
      this.fred.think(value, this.fredsMessages); // this will automatically result in this.fredMessages.next(messageObject)
      // this.chat.setInputType('choice');

    });*/

    // value here is already a complete message template
    this.fredsMessages.subscribe(value => {
      this.messages.push(value);
      this.chat.scrollChat();
    });

    this.userMessages.subscribe(value => {
        // let template = {title: "", type: "base", username: "Mario", date: "Oct 14th 2017 9:37", src: "./assets/user.jpeg", class: 'message--right', message: value};
        this.messages.push(value);
        // debugger;
        this.chat.scrollChat();

        // fred messages as jubject, user message as value, for further analysis
        // this.fred.think(value, this.fredsMessages); // this will automatically result in this.fredMessages.next(messageObject)
        setTimeout( _ => this.fred.think(value, this.fredsMessages), 750); // simulate some delay (nont in the messge queue
      }
    );

    setTimeout(_ => {
      this.fred.think({message:'__test-future'}, this.fredsMessages);
    },10000)



  }


}




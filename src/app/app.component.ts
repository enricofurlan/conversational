import { Component, OnInit, Input, ViewChild, HostBinding } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as Rx from 'rxjs';
import { FredService } from './fred.service';
import { ChatComponent } from './chat/chat.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title = 'app works!';
  messagesObservable: Observable<any>;
  messageObservable: Rx.Subject<any>;
  fredsMessages: Rx.Subject<any>;
  @HostBinding('class') public cssClass;

  @ViewChild(ChatComponent) chat: ChatComponent;
  // @Input('onScroll') scrollChat;
  messages = [];
  showSpeed = 500;
  fullscreen;
  constructor(public fred: FredService) { }


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
    this.fredsMessages = new Rx.Subject();

    this.messagesObservable = Observable.from([
      { title: "", type: "base", username: "Fred", date: "Oct 14th 2017 9:33", src: "./assets/fred.jpeg", class: 'message--left', message: "Hello Mario!" },
      { title: "", type: "base", username: "Mario", date: "Oct 14th 2017 9:34", src: "./assets/user.jpeg", class: 'message--right', message: "Hi Fred!" },
      {
        title: "", type: "base", username: "Fred", date: "Oct 14th 2017 9:36", src: "./assets/fred.jpeg", class: 'message--left',
        message: `How can I help you!<br>I'm an expert in <a class="message__link">finance</a> and <a class="message__link">planning</a>! `
      },
      { title: "", type: "base", username: "Mario", date: "Oct 14th 2017 9:37", src: "./assets/user.jpeg", class: 'message--right', message: "Good, I want to know about planning!!" },
      { title: "", type: "base", username: "Fred", date: "Oct 14th 2017 9:38", src: "./assets/fred.jpeg", class: 'message--left', message: "To properly plan for your &hellip;" },
      { title: "Graph", type: "graph", username: "Fred", date: "Oct 14th 2017 9:38", src: "./assets/fred.jpeg", class: 'message--left', message: "Please examine this graph. This is the percentage of &hellip;" },
      { title: "Simulation", type: "simulation", username: "Fred", date: "Oct 14th 2017 9:38", src: "./assets/fred.jpeg", class: 'message--left', message: "Use the provided controls to simulate a scenario. then click ok when you are OK with the results." },
      { title: "Choose", type: "choice", username: "Fred", date: "Oct 14th 2017 9:38", src: "./assets/fred.jpeg", class: 'message--left', message: "Please choose between A and B. A is more for conservative people, B is if you are eager to risk" },
      { title: "Are you thinking this ?", type: "bubble", username: "Fred", date: "Oct 14th 2017 9:38", src: "./assets/fred.jpeg", class: 'message--left', message: "Thinking..." },
    ]);


    this.messageObservable.subscribe(value => {
      let template = { title: "", type: "base", username: "Mario", date: "Oct 14th 2017 9:37", src: "./assets/user.jpeg", class: 'message--right', message: value };
      this.messages.push(template);
      // debugger;
      this.chat.scrollChat();

      // fred messages as jubject, user message as value, for further analysis
      this.fred.think(value, this.fredsMessages); // this will automatically result in this.fredMessages.next(messageObject)

    });

    // value here is already a complete message template
    this.fredsMessages.subscribe(value => this.messages.push(value));



    this.messagesObservable.zip(
      Rx.Observable.interval(this.showSpeed), function (a, b) { return a; })
      .subscribe(
      value => {
        this.messages.push(value);
        this.chat.scrollChat();
      },
      null,
      null);


  }


}




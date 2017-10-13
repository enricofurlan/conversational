import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as Rx from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  messagesObservable: Observable<any>;
  messages = [];


  constructor() { }

  ngOnInit() {
    this.messagesObservable = Observable.from([
      { src: "./assets/fred.jpeg", class: 'message--left', message: "Hello Mario!" },
      { src: "./assets/user.jpeg", class: 'message--right', message: "Hi Fred!" },
      { src: "./assets/fred.jpeg", class: 'message--left', message: "How can I help you!" },
      { src: "./assets/fred.jpeg", class: 'message--left', message: `I'm an expert in <a class="message__link">finance</a> and <a class="message__link">planning</a>! ` },
      { src: "./assets/user.jpeg", class: 'message--right', message: "Good, I want to know about planning!!" },
      { src: "./assets/fred.jpeg", class: 'message--left', message: "So &hellip;" }
    ]);

    this.messagesObservable.zip(
      Rx.Observable.interval(2500), function (a, b) { return a; })
      .subscribe(
      value =>  this.messages.push(value),
      null,
      null);


  }


}




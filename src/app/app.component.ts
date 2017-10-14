import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as Rx from 'rxjs';
import { FredService } from './fred.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  title = 'app works!';
  messagesObservable: Observable<any>;
  messages = [];


  constructor(public Fred: FredService) { }

  ngOnInit() {
    this.messagesObservable = Observable.from([
      { username:"Fred", date:"Oct 14th 2017 9:33", src: "./assets/fred.jpeg", class: 'message--left', message: "Hello Mario!" },
      { username:"Mario", date:"Oct 14th 2017 9:34", src: "./assets/user.jpeg", class: 'message--right', message: "Hi Fred!" },
      { username:"Fred", date:"Oct 14th 2017 9:35", src: "./assets/fred.jpeg", class: 'message--left', message: "How can I help you!" },
      { username:"Fred", date:"Oct 14th 2017 9:36", src: "./assets/fred.jpeg", class: 'message--left', message: `I'm an expert in <a class="message__link">finance</a> and <a class="message__link">planning</a>! ` },
      { username:"Mario", date:"Oct 14th 2017 9:37", src: "./assets/user.jpeg", class: 'message--right', message: "Good, I want to know about planning!!" },
      { username:"Fred", date:"Oct 14th 2017 9:38", src: "./assets/fred.jpeg", class: 'message--left', message: "So &hellip;" }
    ]);

    this.messagesObservable.zip(
      Rx.Observable.interval(2500), function (a, b) { return a; })
      .subscribe(
      value =>  this.messages.push(value),
      null,
      null);


  }


}




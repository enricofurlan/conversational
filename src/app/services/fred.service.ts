import {Injectable} from '@angular/core';
import * as Rx from 'rxjs';
@Injectable()
export class FredService {

  mq: Rx.Subject<any>;

  constructor() {
  }


  think(userInput: any, messagageQueue?: Rx.Subject<any>): void {
    let ui = userInput;
    userInput = userInput.message;
    // debugger;
    let message: string = '';
    // debugger;
    this.mq = messagageQueue;

    let template = {title: "", type: "base", username: "Fred", date: "Oct 14th 2017 9:37", src: "./assets/fred.jpeg", class: 'message--left', message: '',data:null};
    template.date = new Date().toUTCString();
    let unknown = true;
    if (/hello/.test(userInput) || /hi/.test(userInput)) {
      message = 'Hello user';
      unknown = false;
    }

    if (/finance/.test(userInput)) {
      template.message = `[Finance] Saving money is important &hellip;
      <br>I think your should either <a class="message__link">invest</a> or <a class="message__link">buy into your second pillar</a>.
      <br>You know, I've read the news and stocks for Apple are rising.
      <br>on the other hand buying into the second pillar would save you 4k CHF in taxes in December.
      Would you like to see a <a class="link__message"> comparision </a> between these two options ?`;
      unknown = false;
    }

    if (/children/.test(userInput)) {
      template.message = 'How many children do you have?';
      unknown = false;

    }

    if (/compare/.test(userInput)) {
      template.message = 'Apple shares seem to be increasing but, you know, Oranges are doing good.<br><br>I would not invest in Pears right now. <br><br> Do you want me to buy <a class="message__link">Apples</a> or <a class="message__link">Oranges</a> ?';
      template.title = 'Comparison between Apples and Oranges';
      template.type = 'graph';
      unknown = false;

      // template.type = 'comparision';
    }

    if (/simulate/.test(userInput)) {
      template.message = null; // complex component...
      template.title = 'simulation';
      template.type = 'simulation';
      template.data = {foo:'bar'};
      unknown = false;
    }

    if(/__test-future/.test(userInput)){
      template.message = 'Hey! few montys ago you told me you wanted to invest! That\'s exactly the right moment to do this!' ; // complex component...
      // template.title = 'simulation';
      template.type = 'base';
      // template.data = {foo:'bar'};
      unknown = false;
    }

    if (/graph/.test(userInput)) {
      template.message = 'Here is the graph you requested. The Blue colored areas are in percentage. 33% each, to be precise.';
      template.title = 'Foo Graph';
      template.type = 'graph';
      unknown = false;
    }

    if (/I don\'t understand/.test(userInput)) {
      let encodedInput = encodeURI(userInput);
      template.message = `Yes, the topic is complex. You can read more <a class="message__link" href="http://www.google.com/search?q=${encodedInput}">here</a> to get a deeper understanding`;
      template.title = null;
      template.type = 'base';
      unknown = false;
      // debugger;
    }

    if (unknown) {
      template.message = `Can you repeat ? I did not understand`;
    }

    if (/\b(what|which|choose|choice)\b/i.test(userInput)) {
      // parse the message queue and get the last choice that was not fulfilled
      template.message = `you had to decide upon...`;
      template.type = 'decision';
      unknown = false;
    }


    if (/\b(fuck|geez|hell|prick|gesus|ass|asshole|arse|bitch|biatch|fuck|fucking|shit|blowjob|boobs)\b/i.test(userInput)) {
      let myArray = ['Be Fucking polite, you asshole!', 'Here you are, Mr Polite!', 'Dude, show some respect, we\'re here to do business', 'I dont\' think I know anything about this stuff', 'Can we please get back to work ?'];


      template.message = myArray[Math.floor(Math.random() * myArray.length)];
      // template.title = 'Asshole alert!';

      unknown = false;
    }
    this.say(template);
  }


  public say(message: any): void {
    this.mq.next(message);
    // return this.message;
  }

}

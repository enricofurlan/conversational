import { Component, OnInit , Input, ElementRef} from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit /*, OnChanges */ {
  @Input('messages') messages;
  @Input('mo') messageObservable;
  chatDiv;
  constructor(public el: ElementRef) {
    
  }

  ngOnInit() {
    this.chatDiv = this.el.nativeElement.getElementsByClassName('chat')[0];
  }

  scrollChat(){

    // console.log('scrolling chat',this.el);
    setTimeout(_ => {this.chatDiv.scrollTop = this.chatDiv.scrollHeight},250);
    // debugger;
  }

 

   // ngOnChanges(changes: SimpleChanges) {
    //const name: SimpleChange = changes.messages;
    //console.log('prev value: ', name.previousValue);
    //console.log('got name: ', name.currentValue);
    // this._name = name.currentValue.toUpperCase();
    // console.log(changes);
  // }

  // https://stackoverflow.com/questions/35232731/angular2-scroll-to-bottom-chat-style

}

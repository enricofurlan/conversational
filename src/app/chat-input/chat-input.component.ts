import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.css']
})
export class ChatInputComponent implements OnInit {
  
  usertext;
  constructor() { }

  ngOnInit() {
  }

  onKey(event){
    console.log(event, this.usertext);
  }

}

import { Component, OnInit , Input} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FredService } from '../services/fred.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  sanitizedMessage;
  @Input('message') message;

  constructor(public ds: DomSanitizer, public user:UserService, public fred:FredService) {


  }

  makeChoice(choice):void{
    // debugger;
    // console.log(choice);
    this.user.say(choice);
    //this.user.think(choice);
    //this.user.simulate(choice)
  }

  ngOnInit() {
    this.sanitizedMessage = this.ds.bypassSecurityTrustHtml(this.message.message);

  }

}

import { Component, OnInit , Input} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  sanitizedMessage;
  @Input('message') message;
  constructor(public ds: DomSanitizer) {
   
    
  }

  ngOnInit() {
    this.sanitizedMessage = this.ds.bypassSecurityTrustHtml(this.message.message);
    
  }

}

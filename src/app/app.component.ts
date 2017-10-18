import { Component, OnInit, Input, ViewChild, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  @HostBinding('class') public cssClass;

  fullscreen;
  onDblClick() {
    // debugger;
    this.fullscreen = !this.fullscreen;

    this.cssClass = this.fullscreen ? 'app--fullscreen' : '';
  }

  ngOnInit() {

  }

}




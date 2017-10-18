import {Injectable} from '@angular/core';
import * as Rx from 'rxjs';

@Injectable()
export class UserService {
  public userMessage: Rx.Subject<any> = new Rx.Subject();

  name:string = 'Mario';
  avatarPath:string= "./assets/user.jpeg";
  messageClass:string= 'message--right';

  constructor() {
  }

  say(freeData: string) {
    let template = {title: "", type: "base", username: this.name, date: new Date().toUTCString(), src: this.avatarPath, class: this.messageClass, message: freeData};
    this.userMessage.next(template);
  }

  think(choiceData) {
    let template = {title: "", type: "choice", username: this.name, date: new Date().toUTCString(), src: this.avatarPath, class: this.messageClass, message: null, data: choiceData};

    this.userMessage.next(template);
  }

  simulate(simulationData) {
    let template = {title: "", type: "simulation", username: this.name, date: new Date().toUTCString(), src: this.avatarPath, class: this.messageClass, message: null, data: simulationData};
    this.userMessage.next(template);
  }

}

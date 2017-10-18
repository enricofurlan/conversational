import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { ChatComponent } from './chat/chat.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { FredService } from './fred.service';
import { UserService } from './user.service';
import { SimulationComponent } from './simulation/simulation.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ChatComponent,
    ChatInputComponent,
    SimulationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [FredService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

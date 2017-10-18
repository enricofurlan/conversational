import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MessageComponent } from './message/message.component';
import { ChatComponent } from './chat/chat.component';
import { ChatInputComponent } from './chat-input/chat-input.component';
import { FredService } from './services/fred.service';
import { UserService } from './services/user.service';
import { SimulationComponent } from './simulation/simulation.component';
import { RouterModule, Routes } from '@angular/router';
import { ConfigComponent } from './config/config.component';
import { PageConversationComponent } from './page-conversation/page-conversation.component';

const appRoutes: Routes = [
  { path: 'config', component: ConfigComponent },
  //{ path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'page-conversation',
    component: PageConversationComponent,
    //data: { title: 'Heroes List' }
  },
  { path: '',
    redirectTo: '/page-conversation',
    pathMatch: 'full'
  },
  //{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    ChatComponent,
    ChatInputComponent,
    SimulationComponent,
    ConfigComponent,
    PageConversationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
     RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [FredService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule {

}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdlModule } from 'angular2-mdl';
 import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MdlPopoverModule } from '@angular2-mdl-ext/popover';
import { MdlSelectModule } from '@angular2-mdl-ext/select';
import { LinesituationComponent } from './feature/linesituation/linesituation.component';
import { ROUTES } from './app.route';
import { RlcComponent } from './feature/rlc/rlc.component';
import { ChartModule } from "angular2-highcharts";
import * as highcharts from 'highcharts';
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import { DataService } from "app/feature/dataservice";
import { SpeechRecognitionService } from "app/feature/speech-recognition.service";
import { ChatMessageComponent } from './feature/chat-message/chat-message.component';
import { ChatWindowComponent } from './feature/chat-window/chat-window.component';
import { Broadcaster } from "app/feature/broadcaster/broadcaster";
import { ApiEvent } from "app/feature/events/ApiEvent";


export function highchartsFactory() {
      const hc = require('highcharts');
      return hc;
}

@NgModule({
  declarations: [
    AppComponent,
    LinesituationComponent,
    RlcComponent,
    ChatMessageComponent,
    ChatWindowComponent,
    
  ],
  imports: [
    BrowserModule,
    ChartModule,
    FormsModule,
    HttpModule,
    MdlModule,
    MdlPopoverModule,
    MdlSelectModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [{
      provide: HighchartsStatic,
      useFactory: highchartsFactory
    }, DataService,SpeechRecognitionService,
    Broadcaster,
    ApiEvent
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, OnInit, Input, ElementRef, ViewChild, AfterViewChecked } from '@angular/core';
import { chat } from "app/shared/chat";
import {ApiAiClient} from "api-ai-javascript"
import { SpeechRecognitionService } from 'app/feature/speech-recognition.service';
import { DataService } from "app/feature/dataservice";
import { Router } from "@angular/router";
import { rlcModel } from "app/shared/rlc.contract";
import { ApiEvent } from "app/feature/events/ApiEvent";
const client = new ApiAiClient({ accessToken: '8c071a8d7aa74f11995635ad901b4bfa' });

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls:['./chat-window.component.css']
})
export class ChatWindowComponent implements OnInit, AfterViewChecked {
  
  buttonType: string = "mic";
  rlcObject: any;
  router: any;
  bank_name: any;
  query_question:string="which bank details you want to see?";
  response: any;
  apiResult:any;
  enteredtext: any;
  speechData: string;
  showSearchButton: boolean;

  public chatlist: Array<chat> = [];

  @ViewChild('scrollMe') public myScrollContainer: ElementRef

  constructor(private speechRecognitionService: SpeechRecognitionService, 
              r: Router, public dataService: DataService,
              private apiEvent: ApiEvent,
              ) 
  {
        this.router = r;
        this.showSearchButton = true;
   }
  ngOnInit() {
    let rlcmodel = new rlcModel();
    this.rlcObject = rlcmodel.rlcObject;
      //this.updateScroll()
  }

  sendChat(){
    this.chatlist.push(new chat(this.enteredtext, false));
    
    this.sendRequest(this.enteredtext);
     //this.updateScroll();
    this.enteredtext=null;
  }

  public sendRequest(msg){
    client.textRequest(msg)
      .then((res) => {/* do something */
       this.apiResult = res;
       console.log(res);
       this.response=this.apiResult.result.fulfillment.speech;
       this.chatlist.push(new chat(this.response, true));
       
      if(!this.apiResult.result.actionIncomplete)
       {
        var data: IBroadcastEvent = { action : this.apiResult.result.action, parameters : this.apiResult.result.parameters};
        //Broadcast the action and the paramters
        console.log(this.apiResult.result.parameters);
        this.apiEvent.fire(data);

       }
     // this.updateScroll();
    })
    .catch((error) => {/* do something here too */})
  }
  
  updateScroll():void{
  this.myScrollContainer.nativeElement.scrollTop =  this.myScrollContainer.nativeElement.scrollHeight;
}

ngAfterViewChecked(): void {
  console.log('scroll');
  this.updateScroll()
}
  

  activateSpeechSearchMovie(): void {
        this.showSearchButton = false;

        this.speechRecognitionService.record()
            .subscribe(
            //listener
            (value) => {
                this.speechData = value;
                this.enteredtext=this.speechData;
                this.chatlist.push(new chat(this.enteredtext, false));
                this.sendRequest(this.enteredtext);
                console.log(value);
            },
            //errror
            (err) => {
                console.log(err);
                if (err.error == "no-speech") {
                    console.log("--restatring service--");
                    this.activateSpeechSearchMovie();
                }
            },
            //completion
            () => {
                this.showSearchButton = true;
                console.log("--complete--");
               
            });
  }

  onChange(){
    this.buttonType = "send"
    if(!this.enteredtext)
    this.buttonType = "mic"
  }
  onEnter(){
    this.sendChat();
  }
}

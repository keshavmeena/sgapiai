import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";

import { DataService } from "app/feature/dataservice";
import { chat } from "app/shared/chat";
import { rlcModel } from "app/shared/rlc.contract";
import { ApiEvent } from "app/feature/events/ApiEvent";

@Component({
  selector: 'app-rlc',
  templateUrl: './rlc.component.html',
  styleUrls: ['./rlc.component.css']
})
export class RlcComponent implements OnInit, OnDestroy {
  rlcObject1: any;
  text:any="sorry, check you spell right";
  public chatlist: Array<chat> = [];
  public rlcObject: any;
  
  lol:boolean=false;
  title = 'Risk legal counterpart';
  private router: Router;
  
  constructor(r: Router, public dataService: DataService,private apiEvent: ApiEvent){
    this.router = r;
    let rlcmodel = new rlcModel();
    this.rlcObject = rlcmodel.rlcObject;
  }

  setRlc(rl:any): void{
    this.dataService.SetCounterPart(rl);
    this.router.navigate(['/linesituation']); 
  }

  gotoLineSituation(parameters :any){
    let parameter = parameters.Bank;
    var rlc = this.rlcObject.filter(x => x.Name.toLowerCase().includes(parameter.toLowerCase()) );
    console.log(rlc);
    if(rlc.length !== 0){
    this.setRlc(rlc[0]);}
  } 

  rlcFilter(parameters: any){
    this.chatlist.push(new chat(this.text, false));

  if(parameters.Legal  && parameters.country ){
    this.rlcObject1 = this.rlcObject.filter(x => x.Country.toLowerCase().includes(parameters.country.toLowerCase()) && x.Name.toLowerCase().includes(parameters.Legal.toLowerCase()));
  }
  else{
        if(parameters.Legal ){
            this.rlcObject1 = this.rlcObject.filter(x => x.Name.toLowerCase().includes(parameters.Legal.toLowerCase()));
            console.log(parameters.Legal);
       }
        else{
              this.rlcObject1 = this.rlcObject.filter(x => x.Country.toLowerCase().includes(parameters.country.toLowerCase()));
        }
  }
  if(this.rlcObject1.length!== 0){
    this.rlcObject=this.rlcObject1;
  }
  else{
    
  }
  console.log(this.rlcObject1);
  }

  ngOnInit(): void {
    this.apiEvent.on()
      .subscribe(message => {
        switch(message.action){
        case "Linesituation" :
          this.gotoLineSituation(message.parameters)
          break;
        case "FilterRLC": 
           let rlcmodel = new rlcModel();
          this.rlcObject = rlcmodel.rlcObject;
          this.rlcFilter(message.parameters);
          break;
        case "Nofilter": 
        let rlcmodel1 = new rlcModel();
        this.rlcObject = rlcmodel1.rlcObject;
         break;

      }
    });
  }
  
  ngOnDestroy() {
  }

  onDialogShow(): void{
  }

  onDialogHide(): void{
  }

  

  show() : void{
  }

}


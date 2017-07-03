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
    var rlc = this.rlcObject.filter(x => x.Name.toLowerCase() == parameter.toLowerCase());
    this.setRlc(rlc[0]);
  } 

  rlcFilter(parameters: any){

  }

  ngOnInit(): void {
    this.apiEvent.on()
      .subscribe(message => {
        switch(message.action){
        case "Linesituation" :
          this.gotoLineSituation(message.parameters)
          break;
        case "FilterRLC": 
          this.rlcFilter(message.parameters);
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


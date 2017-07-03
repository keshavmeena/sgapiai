import { Injectable } from "@angular/core";

@Injectable()
export class DataService  {
 private   CounterPartName: any;

 public SetCounterPart(rlc : any)
 {
    this.CounterPartName = rlc
 }

 public GetCounterPart(): any
 {
    return this.CounterPartName;
 }

 
}


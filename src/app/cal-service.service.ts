import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalServiceService {
result:any;
  constructor() {
   
  }
  public add(a:number,b:number){
    this.result=a+b;
    return this.result;
   }
}

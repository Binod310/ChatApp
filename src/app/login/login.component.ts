import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('name') namekey!:ElementRef;
  isshow:boolean=false;
  public printname:any=localStorage.getItem("name");

  constructor() { }

  ngOnInit(): void {
    const name = localStorage.getItem('name');
    if(!name)
    {
      localStorage.setItem("name","");
    }
    if(localStorage.getItem("name")!="")
    {
    // localStorage.setItem("name",this.namekey.nativeElement.value);
    this.isshow=true;
    }
    
    
  }
  startchat()
  {
    localStorage.setItem("name",this.namekey.nativeElement.value);
    
    
  }
}

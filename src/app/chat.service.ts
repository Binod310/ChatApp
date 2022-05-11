import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';
import { io } from "socket.io-client";
@Injectable({
  providedIn: 'root'
})
export class ChatserverserviceService {

  public message$: BehaviorSubject<string> = new BehaviorSubject('');
  
  constructor(public http:HttpClient) {}

  socket = io('http://localhost:3000');

  public sendMessage(message:any) {
    
    this.socket.emit('message',{"message":message ,"name":localStorage.getItem("name")});
    
   
}
public getNewMessage = () => {
  this.socket.on('message', (message: string) =>{
    this.message$.next(message);
  });
  
  return this.message$.asObservable();
};

getdata()
{
  let url="http://localhost:3000/past_messages";
  return this.http.get(url);
}

}

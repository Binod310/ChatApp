import { Component, OnInit } from '@angular/core';
import {ChatserverserviceService} from '../chat.service';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  title = 'chat';
  public newMessage!: string;
  messageList: any=[];
  public data : any;
  constructor(private chatService: ChatserverserviceService) { }

  ngOnInit(): void {

    this.chatService.getdata().subscribe(data=>{
      this.data=data;
    })
   

    this.chatService.getNewMessage().subscribe((message: any) => {
      if(message!="")
      this.messageList.push(message);
      
    })

    
  }

  sendMessage() {
    this.chatService.sendMessage(this.newMessage);
    this.newMessage = '';
  }

}

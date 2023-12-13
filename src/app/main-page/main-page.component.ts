import { Component } from '@angular/core';
import { UploadChatService } from '../upload-chat.service';
import { FormArray, FormControl, FormGroup, FormGroupName } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
 
  public id: string = '1';
  public chatHistory:any = [];
  public userNewChat:string = '';

  public updateChat: any = {
    userId: "angular2",
        password: "9652926869",
        idPassword: "",
        userChat: this.chatHistory
  }

  constructor(private _uplodChat: UploadChatService) {
    _uplodChat.getChatHystiry().subscribe(
      (data: any) => {
        for(let item of data){
          if(item.userId === 'angular1'){
            this.chatHistory = item.userChat 
          }
        }
      },
      (err: any) => {
        alert("internal service error")
      }
    )

  }


 postChat(){
   this.chatHistory.push(this.userNewChat)
   console.log(this.updateChat)
   this._uplodChat.updateChatHistory(this.updateChat,this.id).subscribe(
    (data:any)=>{

    },
    (err:any)=>{
      alert(err)
    }
   )
 }




}

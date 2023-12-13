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
  //  console.log(this.chatHistory)
  //  this._uplodChat.updateChatHistory(this.chatHistory,this.id).subscribe(
  //   (data:any)=>{

  //   },
  //   (err:any)=>{
  //     alert(err)
  //   }
  //  )
 }




}

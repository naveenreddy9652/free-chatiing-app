import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadChatService {
 
  private baseUrl:string = 'https://65756522b2fbb8f6509d08e8.mockapi.io/chat'
  constructor(private _httpClient:HttpClient) { }
  
  getChatHystiry():Observable<any>{
    return this._httpClient.get(this.baseUrl)
  }

  updateChatHistory(data:any, id:string):Observable<any>{
    const url = `${this.baseUrl}/${id}`
    const updateData = { userChat: data };
    return this._httpClient.post(url, updateData)
  }

}

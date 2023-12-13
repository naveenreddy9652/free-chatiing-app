import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateNewBatchService {
  private baseUrl: string = "https://65756522b2fbb8f6509d08e8.mockapi.io/chat/"

  constructor(private _httpClient:HttpClient) {
      
   }

   getChattingData():Observable<any>{
    return this._httpClient.get(this.baseUrl)
   }

   createNewChat(data:any):Observable<any>{
    return this._httpClient.post(this.baseUrl, data)
   }
}

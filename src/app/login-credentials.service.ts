import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginCredentialsService {

  private baseUrl:string = "https://65756522b2fbb8f6509d08e8.mockapi.io/chat"

  constructor(private _httpClient:HttpClient) { }
  getChatHistory():Observable<any>{
    return this._httpClient.get(this.baseUrl)
  }
}

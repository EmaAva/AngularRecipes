import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsertServiceService {
  private ENDPOINT_SERVER = "http://localhost:3000";
  constructor(private httpClient : HttpClient) { }

  public sendGetRequest(servizio : string){
    return this.httpClient.get(this.ENDPOINT_SERVER + servizio)
  }
}

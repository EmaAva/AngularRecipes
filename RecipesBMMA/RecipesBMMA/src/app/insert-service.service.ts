import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InsertServiceService {
  private ENDPOINT_SERVER = "http://localhost:3000";
  constructor(private httpClient : HttpClient) { }
  public sendGetReq(servizio:string){
    return this.httpClient.get(this.ENDPOINT_SERVER + servizio);
  }
  public sendPostReq(servizio : string, body:any){
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.post(this.ENDPOINT_SERVER + servizio, JSON.stringify(body), {headers: headers});
  }
}

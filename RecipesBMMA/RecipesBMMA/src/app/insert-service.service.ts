import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppRecipesSheetComponent } from '../app/app-recipes-sheet/app-recipes-sheet.component';


@Injectable({
  providedIn: 'root'
})
export class InsertServiceService {
  public recipeSheet:any;
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

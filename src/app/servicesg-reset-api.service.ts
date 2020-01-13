import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesgResetApiService {
  private url = ' https://restcountries.eu/rest/v2/all';
  constructor(private httpClient: HttpClient) { }
  getPosts(){
    return this.httpClient.get(this.url);
  
}
 
Posts(email){
  let body = JSON.stringify(email);
  return this.httpClient.post(this.url,body);
}
}

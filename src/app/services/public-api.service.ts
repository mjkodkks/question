import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PublicApiService {

  constructor(private httpClient: HttpClient) { }

  getCategories() {
    return this.httpClient.get('https://api.publicapis.org/categories');
  }

}

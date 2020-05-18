import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResponse {
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotoFetchService {

  constructor(private http: HttpClient) { }

  getPhoto(){
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID KnR9qb0bcGjnFyHASSVjPxJRlD1-E5Ec0KNISmz5CPM'
      }
    });
  }
}

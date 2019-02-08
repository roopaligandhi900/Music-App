import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchLastService {
 
  constructor(private http:HttpClient) { }
  getSongs()
  {
    return this.http.get("http://localhost:3004/posts")
  }

  searchMusic(nameOfthesong:any) {
    return this.http.get(`http://ws.audioscrobbler.com/2.0/?method=track.search&track=${nameOfthesong}&api_key=3b920f5e4bee2291feda876c0598107c&format=json`)
  }

}

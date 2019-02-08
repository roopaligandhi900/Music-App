import { Component, OnInit } from '@angular/core';
import { FetchLastService} from '../fetch-last.service'
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-herosection',
  templateUrl: './herosection.component.html',
  styleUrls: ['./herosection.component.css']
})
export class HerosectionComponent implements OnInit {

  constructor(private music:FetchLastService, private http:HttpClient) { }
  arrayOfMusic = [];

  ngOnInit() {
    
  }

  getMusic(search:any){
    this.music.searchMusic(search).subscribe((data: any) => {
      this.arrayOfMusic=data.results.trackmatches.track;
      console.log(this.arrayOfMusic);
 
      
  })
 }
 onclick(name)
 {
     this.http.post("http://localhost:3004/posts",{name})
    .subscribe(console.log)
 }






}


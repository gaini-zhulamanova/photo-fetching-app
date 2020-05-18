import { Component, OnInit } from '@angular/core';
import { PhotoFetchService } from '../photo-fetch.service';

@Component({
  selector: 'app-display-photo',
  templateUrl: './display-photo.component.html',
  styleUrls: ['./display-photo.component.css']
})
export class DisplayPhotoComponent implements OnInit {

  regularImg = '';

  constructor(private photoService: PhotoFetchService) {
    this.fetchImage();
   }

   handleEvent(){
    this.fetchImage();
   }

   fetchImage(){
      this.photoService.getPhoto().subscribe((response)=> {
      this.regularImg = response.urls.regular;
    });
   }
  ngOnInit(): void {
  }

}

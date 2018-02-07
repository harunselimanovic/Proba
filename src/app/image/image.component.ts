import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  musics:any;
  storedCategoryValues : any;
  constructor(private _data: DataService) {
  }

  ngOnInit() {
    this._data.music.subscribe(res => this.musics = res);
    this._data.value.subscribe(res => this.storedCategoryValues = res);
  }

}

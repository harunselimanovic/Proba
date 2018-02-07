import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import {DatePickerConfig, ECalendarType} from '@libusoftcicom/lc-datepicker';
import {OrderByPipe} from "../orderby.pipe";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public dateValue: string = null;
    public config = new DatePickerConfig();
    public calendarOpened: boolean = false;
    opencal(){
      this.calendarOpened = !this.calendarOpened;
    }
  constructor(private _data: DataService) {
    this.config.CalendarType = ECalendarType.Date;
     this.config.Localization = 'en';
    }
    public get setDate() {
       return this.dateValue;
     }

     public set setDate(value: string) {
       this.dateValue = value;
     }

  ngOnInit() {
    this._data.music.subscribe(res => this.musics = res);
    this._data.changeMusics(this.musics);
  }

  musics: any[] = [];

  userFilter: any = {};
  sortBy:string;
  Country: any[] = [ {name:'Bosnia and Herzegovina'},{name:'Croatia'},{name:'Serbia'},{name:'New Zeland'},{name:'USA'} ];
  Genre:any[] =[{name:'Alternative'},{name:'Pop'},{name:'Rock'},{name:'Jazz'},{name:'Hip Hop'},{name:'Folk'},{name:'Electronic'}];

  storedCategoryValues=[] ;
  selectedAll: any;
  selectAll() {
      for (var i = 0; i < this.musics.length; i++) {
        this.musics[i].selected = true;
      }
      for (var i = 0; i < this.musics.length; i++) {
        if(!this.storedCategoryValues.map(function(e){return e.id;}).includes(this.musics[i].id)){
        this.storedCategoryValues.push({
          id: this.musics[i].id,
          name: this.musics[i].name,
          artist: this.musics[i].artist,
          img: this.musics[i].img,
          date:this.musics[i].date,
          country:this.musics[i].country,
          genre:this.musics[i].genre,
          selected:this.musics[i].selected,
        });
      }
    }
      this._data.changeValue(this.storedCategoryValues);
    }

    checkIfAllSelected() {
      this.selectedAll = this.musics.every(function(item:any) {
          return item.selected == true;
        })
    }
    select(music){
      music.selected = !music.selected;
      if(!this.storedCategoryValues.map(function(e){return e.id;}).includes(music.id)){
        this.storedCategoryValues.push({
        id: music.id,
        name: music.name,
        artist: music.artist,
        img: music.img,
        date:music.date,
        country:music.country,
        genre:music.genre,
        selected:music.selected
      });

    }else{
      const index = this.storedCategoryValues.map(function(e){return e.id;}).indexOf(music.id);
      this.storedCategoryValues.splice(index,1);
    }
    this._data.changeValue(this.storedCategoryValues);
    }


}

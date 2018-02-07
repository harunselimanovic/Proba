import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class DataService {

  private musics = new BehaviorSubject<any>([{
    id: 0,
      name: 'Love Galore',
      artist:'SZA',
      img:'love_galore.jpg',
      date:new Date("2017/04/27"),
      country:'USA',
      genre:'Pop',
      selected: false
  }, {
    id: 1,
      name: 'Boys',
      artist:'Charlie XCX',
      img:'boys.jpg',
      date:new Date("2017/07/26"),
      country:'USA',
      genre:'Pop',
      selected: false
  }, {
    id: 2,
      name: 'I promise',
      artist:'Radiohead',
      img:'i_promise.jpg',
      date:new Date("2017/06/02"),
      country:'English',
      genre:'Rock',
      selected: false
  }, {
    id: 3,
      name: 'To the Moon and Back',
      artist:'Karin Dreijer Andersson',
      img:'to_the_moon_and_back.jpg',
      date:new Date("2017/10/27"),
      country:'USA',
      genre:'Alternative',
      selected: false
  }, {
    id: 4,
      name: 'Perfect Places',
      artist:'Lordre',
      img:'perfect_places.jpg',
      date:new Date("2017/6/2"),
      country:'New Zeland',
      genre:'Electronic',
      selected: false
  },
  {
    id: 5,
      name: 'Love Galore',
      artist:'SZA',
      img:'love_galore.jpg',
      date:new Date("2017/04/27"),
      country:'USA',
      genre:'Pop',
      selected: false
  }, {
    id: 6,
      name: 'Boys',
      artist:'Charlie XCX',
      img:'boys.jpg',
      date:new Date("2017/07/26"),
      country:'USA',
      genre:'Pop',
      selected: false
  }, {
    id: 7,
      name: 'I promise',
      artist:'Radiohead',
      img:'i_promise.jpg',
      date:new Date("2017/06/02"),
      country:'English',
      genre:'Rock',
      selected: false
  }, {
    id: 8,
      name: 'To the Moon and Back',
      artist:'Karin Dreijer Andersson',
      img:'to_the_moon_and_back.jpg',
      date:new Date("2017/10/27"),
      country:'USA',
      genre:'Alternative',
      selected: false
  }, {
    id: 9,
      name: 'Perfect Places',
      artist:'Lordre',
      img:'perfect_places.jpg',
      date:new Date("2017/6/2"),
      country:'New Zeland',
      genre:'Electronic',
      selected: false
  },{
    id: 10,
      name: 'Love Galore',
      artist:'SZA',
      img:'love_galore.jpg',
      date:new Date("2017/04/27"),
      country:'USA',
      genre:'Pop',
      selected: false
  }, {
    id: 11,
      name: 'Boys',
      artist:'Charlie XCX',
      img:'boys.jpg',
      date:new Date("2017/07/26"),
      country:'USA',
      genre:'Pop',
      selected: false
  }, {
    id: 12,
      name: 'I promise',
      artist:'Radiohead',
      img:'i_promise.jpg',
      date:new Date("2017/06/02"),
      country:'English',
      genre:'Rock',
      selected: false
  }, {
    id: 13,
      name: 'To the Moon and Back',
      artist:'Karin Dreijer Andersson',
      img:'to_the_moon_and_back.jpg',
      date:new Date("2017/10/27"),
      country:'USA',
      genre:'Alternative',
      selected: false
  }, {
    id: 14,
      name: 'Perfect Places',
      artist:'Lordre',
      img:'perfect_places.jpg',
      date:new Date("2017/6/2"),
      country:'New Zeland',
      genre:'Electronic',
      selected: false
  },{
    id: 15,
      name: 'Love Galore',
      artist:'SZA',
      img:'love_galore.jpg',
      date:new Date("2017/04/27"),
      country:'USA',
      genre:'Pop',
      selected: false
  }, {
    id: 16,
      name: 'Boys',
      artist:'Charlie XCX',
      img:'boys.jpg',
      date:new Date("2017/07/26"),
      country:'USA',
      genre:'Pop',
      selected: false
  }, {
    id: 17,
      name: 'I promise',
      artist:'Radiohead',
      img:'i_promise.jpg',
      date:new Date("2017/06/02"),
      country:'English',
      genre:'Rock',
      selected: false
  }, {
    id: 18,
      name: 'To the Moon and Back',
      artist:'Karin Dreijer Andersson',
      img:'to_the_moon_and_back.jpg',
      date:new Date("2017/10/27"),
      country:'USA',
      genre:'Alternative',
      selected: false
  }, {
    id: 19,
      name: 'Perfect Places',
      artist:'Lordre',
      img:'perfect_places.jpg',
      date:new Date("2017/6/2"),
      country:'New Zeland',
      genre:'Electronic',
      selected: false
  },]);
  music = this.musics.asObservable();
  private storedCategoryValues = new BehaviorSubject<any> ([]);
  value = this.storedCategoryValues.asObservable();
  constructor() { }

  changeMusics(music){
    this.musics.next(music);
  }

  changeValue(value){
    this.storedCategoryValues.next(value);
  }
}

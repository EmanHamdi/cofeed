import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';


@Component({
  selector: 'cardNum',
  templateUrl: './bar-graph.component.html',
  styleUrls: ['./bar-graph.component.scss']
})
export class BarGraphComponent implements OnInit {

  count = 0;

  // public get showCount(){
  //   return localStorage.getitem('count')
  // }

  // public set show(count){
  //    localStorage.setItem('count', count)
  // }

  constructor() { }

  currentUser: {
    photoURL: 'assets/images/avatars/hari.jpg',
    currentUserName: 'You'
  }

  ngOnInit() {
    this.saveData('id', this.incCount());
  }

  public incCount(){
    this.count += 1;
  }

  public saveData(key, value) {
    localStorage.setItem(key, value);
  }

  public getData(key) {
    let data = localStorage.getItem(key)|| "";
    return this.incCount();
  }

}

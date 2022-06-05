import { Component, OnInit, Input } from '@angular/core';
import { Observable, Observer } from 'rxjs';
@Component({
  selector: 'cdk-dashcard',
  templateUrl: './dashcard.component.html',
  styleUrls: ['./dashcard.component.scss']
})
export class DashcardComponent implements OnInit {

  @Input() dashData: any;
  @Input() currentUser;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };



  constructor() {

  }

  ngOnInit() {

  }

}

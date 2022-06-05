import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-crm',
  templateUrl: './dashboard-crm.component.html',
  styleUrls: ['./dashboard-crm.component.scss']
})

export class DashboardCrmComponent implements OnInit {

  public dashCard = [
    {
      currentUser: {
        photoURL: 'assets/images/avatars/hari.jpg',
        currentUserName: 'You'
      }
    },
    {
      currentUser: {
        photoURL: 'assets/images/avatars/hari.jpg',
        currentUserName: 'Supardi'
      }
    },
    {
      currentUser: {
        photoURL: 'assets/images/avatars/hari.jpg',
        currentUserName: 'Dean'
      }
    },
    {
      currentUser: {
        photoURL: 'assets/images/avatars/hari.jpg',
        currentUserName: 'Theodore'
      }
    },
    {
      currentUser: {
        photoURL: 'assets/images/avatars/hari.jpg',
        currentUserName: 'Walter'
      }
    },
    {
      currentUser: {
        photoURL: 'assets/images/avatars/hari.jpg',
        currentUserName: 'Jesse'
      }
    },
    {
      currentUser: {
        photoURL: 'assets/images/avatars/hari.jpg',
        currentUserName: 'Enola'
      }
    },
  ];

  public Card = [
    {
      currentUser: {
        photoURL: 'assets/images/avatars/hari.jpg',
        currentUserName: 'You'
      }
    },
    {
      currentUser: {
        photoURL: 'assets/images/avatars/hari.jpg',
        currentUserName: 'Supardi'
      }
    },

  ];



  constructor() { }

  ngOnInit() {
  }

}

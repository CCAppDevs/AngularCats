import { Component, OnInit } from '@angular/core';

// typescript code goes here

// think of this as a controller for your compenent

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  print(): void {
    console.log("i printed something");
  }
}

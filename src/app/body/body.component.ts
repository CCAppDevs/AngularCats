import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  heading: string = "Our Products";

  products: any[] = [
    { id: 1, name: "Http Cat", description: "Cats as HTTP Status Codes", imageurl: "https://placekitten.com/256/256?image=3" },
    { id: 2, name: "CatsAAS", description: "Cats as a service", imageurl: "https://placekitten.com/256/256?image=2"  },
    { id: 3, name: "CatFacts", description: "Cat Facts!", imageurl: "http://emmamaree.com/wp-content/uploads/2014/07/wpid-wp-1406070870758.jpeg"  }
  ];

  constructor() {  }

  ngOnInit(): void {

  }

}

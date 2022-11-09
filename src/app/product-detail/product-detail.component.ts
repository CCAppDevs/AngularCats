import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  products: any[] = [
    { id: 1, name: "Http Cat", description: "Cats as HTTP Status Codes", imageurl: "https://placekitten.com/256/256?image=3" },
    { id: 2, name: "CatsAAS", description: "Cats as a service", imageurl: "https://placekitten.com/256/256?image=2"  },
    { id: 3, name: "CatFacts", description: "Cat Facts!", imageurl: "http://emmamaree.com/wp-content/uploads/2014/07/wpid-wp-1406070870758.jpeg"  }
  ];

  id = 0;

  data: any = { 
    id: 0,
    name: "Placeholder Cat",
    description: "Cats i guess",
    imageurl: "https://placekitten.com/256/256?image=13"
  };


  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("the route param is:", this.route.snapshot.queryParams);
  }

}

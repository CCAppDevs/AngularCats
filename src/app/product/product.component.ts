import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() data = {
    id: 0,
    name: "placeholder",
    description: "placeholder description",
    imageurl: "https://placekitten.com/256/256?image=3"
  }

  constructor() { }

  ngOnInit(): void {
  }

}

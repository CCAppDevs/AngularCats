import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  id: any = 0;

  data: any = { 
    id: 0,
    name: "Placeholder Cat",
    description: "Cats i guess",
    imageurl: "https://placekitten.com/256/256?image=13"
  };


  constructor(
    private route: ActivatedRoute,
    private productService: ProductService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('productid');
    this.data = this.productService.getProductById(this.id);
  }

}

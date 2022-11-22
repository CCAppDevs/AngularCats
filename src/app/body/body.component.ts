import { Component, OnInit } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  catFact: any = {
    fact: "",
    length: 0
  };

  catFactList: any[] = [];

  catFactObservable: Observable<any> = of([1, 2, 3]);

  heading: string = "Our Products";

  products: any[] = [];

  constructor(private productService: ProductService) {
    this.refreshProducts();
  }

  ngOnInit(): void {
    this.productService.getRandomCatFact().pipe(
      delay(10000)
    ).subscribe(data => {
      this.catFact = data;
    });

    this.productService.getCatFacts().subscribe(data => {
      console.log('get list of cat facts', data);
      this.catFactList = data.data;
    });

    this.productService.testStreaming().subscribe(value => {
      console.log(value);
    });

    this.productService.getChatChannel("tech").subscribe(data => {
      console.log("chat channel response", data);
    }, err => {
      console.log("There was an error: ", err);
    });
  }

  refreshProducts() {
    this.products = this.productService.getAllProducts();
  }



  addProduct() {
    let newProduct = { 
      id: 4, 
      name: "New Cat", 
      description: "This cat is a runtime cat", 
      imageurl: "https://placekitten.com/256/256?image=4" };

    this.productService.createProduct(newProduct);
    this.refreshProducts();
  }
}

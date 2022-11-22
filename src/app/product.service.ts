import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: any[] = [
    { id: 1, name: "Http Cat", description: "Cats as HTTP Status Codes", imageurl: "https://placekitten.com/256/256?image=3" },
    { id: 2, name: "CatsAAS", description: "Cats as a service", imageurl: "https://placekitten.com/256/256?image=2"  },
    { id: 3, name: "CatFacts", description: "Cat Facts!", imageurl: "http://emmamaree.com/wp-content/uploads/2014/07/wpid-wp-1406070870758.jpeg"  }
  ];

  constructor(private http: HttpClient) {
    console.log("ProductService is loaded");
  }

  // READ all
  getAllProducts(): any[] {
    return this.products;
  }

  // read one by id
  getProductById(id: number): any {
    return this.products.filter(item => item.id == id)[0];
  }

  // create a product
  createProduct(product: any) {
    this.products.push(product);
  }

  getRandomCatFact(): Observable<any> {
    let baseUrl: string = "https://catfact.ninja/fact";
    return this.http.get(baseUrl).pipe(
      tap(data => console.log(data))
    );
  }

  getCatFacts(): Observable<any> {
    let baseUrl: string = "https://catfact.ninja/facts";
    return this.http.get(baseUrl);
  }

  getCataasJson(): Observable<any> {
    let baseUrl: string = "https://cataas.com/cat?json=true";
    return this.http.get(baseUrl);
  }

  getChatChannel(channelName: string): Observable<any> {
    // example http://localhost:3000/api/tech
    let baseUrl: string = `http://localhost:3000/api/` + channelName;
    return this.http.get(baseUrl);
  }

  testStreaming(): Observable<number> {
    return of(1, 2, 3, 4, 5, 6, 7, 8, 9);
  }
}

import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  products: Product[] = []

  async ngOnInit() {
    this.products = await firstValueFrom(this.http.get<Product[]>("http://localhost:3000/product"))
  }

}

type Product = {
  id: number,
  name: string,
  price: number,
  description: string
}

import { Product } from './../../../model/product';
import { ProductService } from './../../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  ProductList: Product[] = []

  constructor(private ProductService: ProductService) { }

  ngOnInit(): void {
    this.ProductService.getProduct().subscribe((products)=>{
      this.ProductList = products;
    })
  }

}

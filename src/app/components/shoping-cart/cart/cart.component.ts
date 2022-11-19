import { MassangerService } from './../../../services/massanger.service';
import { Product } from './../../../model/product';
import { Component, OnInit } from '@angular/core';
import { isNgTemplate } from '@angular/compiler';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItem = [
    {id:1 , ProductId:1, productNamme:'Test 1',qut: 4, price:100},
    //{id:2 , ProductId:2, productNamme:'Test 2',qut: 4, price:200},
    //{id:3 , ProductId:3, productNamme:'Test 3',qut: 4, price:300},
    //{id:4 , ProductId:4, productNamme:'Test 4',qut: 4, price:400},
  ];

  cartTotal = 0;

  constructor(private msg:MassangerService) { }
  ngOnInit() {}
/*
  ngOnInit() {
    this.msg.getMsg().subscribe((product: Product) => {
      
      this.cartItem.push({
        ProductId : product.id,
        productName : Product.name,
        qty : 1,
        price : product.price
      })
      this.cartTotal = 0
      this.cartItem.forEach(item => {
        this.cartTotal += (item.qty * item.price)
      })
    })

    
  }
*/

}

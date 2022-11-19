import { MassangerService } from './../../../../services/massanger.service';
import { Product } from './../../../../model/product';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem : any

  constructor(private msg:MassangerService) { }

  ngOnInit(): void {
  }

  handleAddToCart(){
    this.msg.sendMsg(this.productItem)
  }

}

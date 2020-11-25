import { Component, OnInit} from '@angular/core';
import { ActivatedRoute} from  '@angular/router';
import { products} from '../products';




@Component ({
    selector: 'product-detail', 
    templateUrl: './product-detail.htmlk',
    styleUrls: ['./product-detail.component.scss']
})



export class ProductDetailComponent implements OnInit{
product; 

constructor (
    private route: ActivatedRoute, 
)
{}

ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

}
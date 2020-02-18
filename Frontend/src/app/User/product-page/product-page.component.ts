import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductServiceService } from 'src/app/Service/product-service.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product: any;
  products = [];
  constructor(public router: ActivatedRoute, public productService: ProductServiceService) {
    this.productService.cart = JSON.parse( localStorage.getItem('cart'));
  }

  ngOnInit() {
    console.log(this.router.snapshot.params.id);
    this.productService.getproduct(this.router.snapshot.params.id).subscribe(result => {
      this.product = result;
    });
  }

onAddCart(prod) {
  let foundProduct = 0;
if (this.productService.cart) {

  for (let i = 0; i < this.productService.cart.length ; i++) {
   if (prod._id  === this.productService.cart[i]._id) {
     this.productService.cart[i].quantity = this.productService.cart[i].quantity + 1;
     foundProduct = 1;
     this.productService.cart[i].total =  this.productService.cart[i].total + (+this.productService.cart[i].cost);
    }
  }
  if (foundProduct === 0) {
    prod.quantity = 1;
    prod.total =   +prod.cost;
    this.productService.cart.push(prod);

  }
} else {
  prod.quantity = 1;
  prod.total =   +prod.cost;
  const tempArray = [];
  tempArray.push(prod);
this.productService.cart = tempArray;
}
localStorage.setItem('cart' , JSON.stringify( this.productService.cart));
console.log(this.productService.cart);
}
}

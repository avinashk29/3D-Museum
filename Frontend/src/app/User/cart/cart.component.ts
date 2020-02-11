import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from 'src/app/Service/product-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  totalCost = 0;
  constructor(public productService: ProductServiceService) {
    this.productService.cart = JSON.parse( localStorage.getItem('cart'));
        console.log(this.productService.cart);
    this.getTotal();
  }

  ngOnInit() {
  }
// Increase product quantity
OnAddQuantity(index) {
console.log(this.productService.cart[index]);
this.productService.cart[index].quantity = this.productService.cart[index].quantity + 1;
this.productService.cart[index].total = this.productService.cart[index].total +  +this.productService.cart[index].cost;
this.totalCost = this.totalCost  +  +this.productService.cart[index].cost;
localStorage.setItem('cart' , JSON.stringify( this.productService.cart));
}

// Decrease product quantity
OnSubQuantity(index) {
  console.log(this.productService.cart[index]);
  this.productService.cart[index].quantity = this.productService.cart[index].quantity - 1;
  this.productService.cart[index].total = this.productService.cart[index].total  -  +this.productService.cart[index].cost;
  this.totalCost = this.totalCost  -  +this.productService.cart[index].cost;
  localStorage.setItem('cart' , JSON.stringify( this.productService.cart));
  }

// Get total cart value
getTotal() {
  for (let i = 0 ; i < this.productService.cart.length ; i++) {
    this.totalCost = this.totalCost + this.productService.cart[i].total;
  }
}


// On deleting cart items
onDelete(index) {
const idx = this.productService.cart.indexOf(index);
this.totalCost = this.totalCost - this.productService.cart[index].total;
this.productService.cart.splice(idx , 1);
localStorage.setItem('cart' , JSON.stringify( this.productService.cart));
}
}

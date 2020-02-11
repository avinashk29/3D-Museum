import { Component, OnInit, HostListener } from '@angular/core';
import { ProductServiceService } from 'src/app/Service/product-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public productService: ProductServiceService, public router: Router) { }
  scrolled =  false;
  products;
  ngOnInit() {
    this.productService.getProducts().subscribe((result) => {
      this.products = result;
    });
}

@HostListener('window:scroll', ['$event'])
    scrollHandler(event) {
      this.scrolled = true;
      const direction = document.documentElement.scrollTop;
      if (direction === 0) {
        this.scrolled = false;
      }
    }

onShowProduct(id) {
  console.log(id);
  this.router.navigate(['/product/' + id]);
}
}

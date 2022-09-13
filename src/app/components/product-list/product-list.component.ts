import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product-interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  constructor(private productService: ProductService) {}

  products: Product[] = [];

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
      Object.keys(this.products);
    });
  }

  deleteProduct(id: string | any) {
    this.productService
      .deleteProduct(id)
      .subscribe((res) => this.getAllProducts());
  }
}

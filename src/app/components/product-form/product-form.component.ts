import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../interfaces/product-interface';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  product: Product = {
    // _id: 'fd',
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
  };

  editProduct: boolean = false;

  constructor(
    private productService: ProductService,
    private router: Router, //Sirve para direccionar las páginas
    private activatedRouter: ActivatedRoute //Da información de la ruta en donde nos encontramos
  ) {}

  ngOnInit(): void {
    const { id } = this.activatedRouter.snapshot.params;
    console.log(id);
    if (id) {
      this.productService.getProduct(id).subscribe((res) => {
        console.log(res);
        this.product = res;
        this.editProduct = true;
      });
    }
  }

  submitProduct() {
    this.productService.createProduct(this.product).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/']);
    });
  }

  updateProdcut() {
    delete this.product.createAt;
    this.productService
      .updateProduct(this.product._id!, this.product)
      .subscribe((res) => {
        console.log(res);
        this.router.navigate(['/product']);
      });
  }
}

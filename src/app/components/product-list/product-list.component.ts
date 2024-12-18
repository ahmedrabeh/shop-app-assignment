import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  filteredProducts: any[] = [];

  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.filteredProducts = [...data];
    });
  }

  onInputChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.filteredProducts = this.products.filter((product) =>
      product.name.toLowerCase().includes(inputElement.value.toLowerCase())
    );
  }


  sortProducts(field: string): void {
    this.filteredProducts.sort((a, b) => (a[field] > b[field] ? 1 : -1));
  }

  navigateToDetails(productId: number): void {
    this.router.navigate(['/product', productId]);
  }
}

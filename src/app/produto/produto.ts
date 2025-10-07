import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { Product, getProducts } from '../services/product.data';


@Component({
selector: 'app-produto',
standalone: true,
imports: [CommonModule, RouterModule],
templateUrl: './produto.html',
styleUrls: ['./produto.css']
})

export class ProdutoComponent {
	products: Product[] = [];
	constructor(private router: Router) {
		this.products = getProducts();
	}


comprar(id: number) {
this.router.navigate(['/produto-detalhe', id]);
}
}
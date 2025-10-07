import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, getProductById } from '../services/product.data';


@Component({
	selector: 'app-produto-detalhe',
	standalone: true,
	imports: [CommonModule],
		templateUrl: './produto-detalhe.html',
		styleUrls: ['./produto-detalhe.css']
})
export class ProdutoDetalheComponent {
	product: Product | undefined;

	constructor(private route: ActivatedRoute, private router: Router) {
		const idStr = this.route.snapshot.paramMap.get('id') ?? '0';
		const id = Number(idStr);
		this.product = getProductById(id);
	}


voltar() { this.router.navigate(['/produtos']); }
}
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { ProdutoComponent } from './produto/produto';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe';
import { SobreComponent } from './sobre/sobre';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'produtos', component: ProdutoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'produto-detalhe/:id', component: ProdutoDetalheComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: 'home' }
];

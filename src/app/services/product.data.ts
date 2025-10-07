export interface Product {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  emEstoque: boolean;
}

export const PRODUCTS: Product[] = [
  { id: 1, nome: 'Camiseta', descricao: 'Camiseta 100% algodão', preco: 49.9, emEstoque: true },
  { id: 2, nome: 'Caneca', descricao: 'Caneca cerâmica 300ml', preco: 24.5, emEstoque: true },
  { id: 3, nome: 'Boné', descricao: 'Boné esportivo', preco: 39.0, emEstoque: false }
];

export function getProducts(): Product[] {
  return PRODUCTS;
}

export function getProductById(id: number): Product | undefined {
  return PRODUCTS.find(p => p.id === id);
}

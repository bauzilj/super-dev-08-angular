import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './produtos.html',
  styleUrl: './produtos.css',
})
export class Produtos {

  produtos: { nome: string; quantidade: number; valor: number }[] = [
    { nome: "Tomate", quantidade: 2, valor: 5 },
    { nome: "Manga", quantidade: 3, valor: 4 },
    { nome: "Batata", quantidade: 5, valor: 3 }
  ];

  produto = {
    nome: "",
    quantidade: 1,
    valor: 0
  };

  indiceParaEditar: number = -1;

  salvar(): void {
    if (!this.produto.nome) return;

    if (this.indiceParaEditar === -1) {
      this.cadastrar();
    } else {
      this.editar();
    }

    // reset
    this.produto = {
      nome: "",
      quantidade: 1,
      valor: 0
    };
  }

  cadastrar(): void {
    this.produtos.push({ ...this.produto });
    alert("Produto cadastrado com sucesso!");
  }

  editar(): void {
    this.produtos[this.indiceParaEditar] = { ...this.produto };
    alert("Produto alterado com sucesso!");

    this.indiceParaEditar = -1;
  }

  apagar(produto: any): void {
    const indice = this.produtos.indexOf(produto);
    this.produtos.splice(indice, 1);
  }

  preencherCampoParaEditar(produto: any): void {
    this.indiceParaEditar = this.produtos.indexOf(produto);

    this.produto = {
      nome: produto.nome,
      quantidade: produto.quantidade,
      valor: produto.valor
    };
  }

}
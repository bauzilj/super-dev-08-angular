import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-lanchonete',
  imports: [FormsModule, CommonModule],
  templateUrl: './lanchonete.html',
  styleUrl: './lanchonete.css',
})
export class Lanchonete {
  nomeProduto: string = "";
  precoUnitario: number | null = null;
  quantidade: number | null = null;
  calculoPedido: number | null = null;
  formaPagamento: string = "";
  valorFinal : number | null = null;

  apresentarLanchonete(): void {
    

    if(this.nomeProduto === ""){
      alert("Preenche o nome do produto")
      return;
    }
    if(this.quantidade === null){
      alert("Digite uma quantidade");
      return;
    }

    if(this.precoUnitario === null){
      alert("Digite o preço");
      return;
    }
    this.calculoPedido = this.quantidade * this.precoUnitario;

    if(this.formaPagamento === "Pix"){
        this.valorFinal = this.calculoPedido * 0.85;
    } else if(this.formaPagamento === "Crédito"){
        this.valorFinal = this.calculoPedido * 1.15;
    }
  }
}

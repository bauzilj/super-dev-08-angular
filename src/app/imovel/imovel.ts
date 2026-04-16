import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-imovel',
  imports: [FormsModule],
  templateUrl: './imovel.html',
  styleUrl: './imovel.css',
})
export class ImovelComponent {
  valor: number | null = null;
  quantidade: number | null = null;
  valorDoMetroQuadrado: number | null = null;

  valorImovel(): void {

    if (this.valor === null || this.valor <= 0) {
      alert("Valor do imóvel deve ser preenchido e maior que 0");
      return;
    }

    if (this.quantidade === null || this.quantidade <= 0) {
      alert("Quantidade de metros quadrados deve ser preenchida e maior que 0");
      return;
    }

    this.valorDoMetroQuadrado = parseFloat(
      (this.valor / this.quantidade).toFixed(2)
    );
  }

}

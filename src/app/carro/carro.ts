import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-carro',
  imports: [FormsModule],
  templateUrl: './carro.html',
  styleUrl: './carro.css',
})
export class CarroComponent {
  modeloDoCarro: string = "";
  marcaDoCarro: string = "";
  quilometragemAnterior: number | null = null;
  precoPorLitro: number | null = null;
  valorTotalAbastecimento: number | null = null;
  quilometragemAtual: number | null = null;

  quantidadeLitroAbastecidos: number | null = null;
  quilometrosRodados: number | null = null;
  media: number | null = null;


  apresentarCarro(): void {

    if (this.modeloDoCarro === "" || this.marcaDoCarro === "") {
      alert("Preenche o modelo e a marca do carro corretamente.");
      return;
    }

    if (
      this.precoPorLitro === null ||
      this.valorTotalAbastecimento === null
    ) {
      alert("Preencha preço e valor do abastecimento.");
      return;
    }

    if (this.precoPorLitro === 0) {
      alert("Preço por litro não pode ser 0");
      return;
    }

    if (this.valorTotalAbastecimento === 0) {
      alert("Valor abastecimento não pode ser 0");
      return;
    }
      
    if (this.quilometragemAnterior === null || this.quilometragemAtual === null) {
      alert("Preencha as quilometragens.");
      return;
    }

    if (this.quilometragemAtual < this.quilometragemAnterior) {
      alert("Quilometragem atual não pode ser menor que a anterior.");
      return;
    }
    this.quantidadeLitroAbastecidos =
      this.valorTotalAbastecimento / this.precoPorLitro;

    this.quilometrosRodados =
      this.quilometragemAtual - this.quilometragemAnterior;

    this.media = Number(
      (this.quilometrosRodados / this.quantidadeLitroAbastecidos).toFixed(2)
    );
  }
}
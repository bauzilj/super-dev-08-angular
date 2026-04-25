import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Carro } from './carro/carro';
import { PacienteComponent } from "./paciente/paciente";
import { ImovelComponent } from './imovel/imovel';
import { Lanchonete } from './lanchonete/lanchonete';







@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, Lanchonete, ImovelComponent, PacienteComponent, Carro],
  templateUrl: './app.html',
  styleUrls: ['./app.css'] // 
})
export class App {
  protected readonly title = signal('loja-ng');

  numero1: number = 0;
  numero2: number = 0;

  apresentarMensagem(): void {
    alert("Abacate");
  }

  somar(): void {
    let resultado: number = this.numero1 + this.numero2;
    alert(`Soma: ${resultado}`);
  }

}

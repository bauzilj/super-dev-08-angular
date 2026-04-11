import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { PacienteComponent } from "./paciente/paciente";
import { ImovelComponent } from './imovel/imovel';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ImovelComponent, PacienteComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('loja-ng');

  numero1: number = 0;
  numero2: number = 0;

  apresentarMensagem(): void {
    alert("Abacate");
  }

  somar(): void {
    let resultado : number =  this.numero1 + this.numero2;
    alert(`Soma: ${resultado}`);
  }

}

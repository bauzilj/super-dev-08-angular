import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clientes',
  imports: [FormsModule],
  templateUrl: './clientes.html',
  styleUrl: './clientes.css',
})
export class Clientes {
  clientes: string[] = ["Jorge Silva", "Abacat Batatinha", "Ronaldo Souza"]
  cpfs: string[] = ["123.456.789-10", "123.456.677-43","343.566.754-94"]

  nome: string = "";
  cpf: string="";

  // Variavel para armazenar o indice do que sera editando
  // Comeca com -1 pq esta no modo de cadastro
  //Qualquer outro numero, quer dizer esta no modo de editar
  indiceParaEditar: number = -1;

  salvar(): void {
    if(this.indiceParaEditar === -1){
      this.cadastrar();
    } else{
      this.editar();
    }
    this.nome = "";
    this.cpf = "";
  }

  cadastrar(): void {
    this.clientes.push(this.nome);
    this.cpfs.push(this.cpf);
    alert("Cliente cadastrado com sucesso!")
  }
  editar(): void{
    this.clientes[this.indiceParaEditar] = this.nome;
    this.cpfs[this.indiceParaEditar] = this.cpf;
    alert("Cliente alterado com sucesso!");

    this.indiceParaEditar = -1;
  }

  apagar(nomeCliente: string): void {
    let indiceNomeCliente = this.clientes.indexOf(nomeCliente);
    alert(indiceNomeCliente);

    this.clientes.splice(indiceNomeCliente, 1);
    this.cpfs.splice(indiceNomeCliente, 1)
  }

  preencherCampoParaEditar(nomeCliente: string, cpfCliente: string): void {

    //Desco
    this.indiceParaEditar = this.clientes.indexOf(nomeCliente);
   

    //Preencher o campo do nome
    this.nome = nomeCliente;
    this.cpf = cpfCliente;
  }
}

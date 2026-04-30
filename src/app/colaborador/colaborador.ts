import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-colaborador',
  imports: [FormsModule, CommonModule],
  templateUrl: './colaborador.html',
  styleUrl: './colaborador.css',
})
export class Colaborador {

  colaboradores: {
    nome: string;
    dataDeNascimento: string;
    valorHora: number;
    quantidadeHora: number;
    valorValeRefeicao: number;
    valorValeTransporte: number;
    valorDescontoPlanoSaude: number;
  }[] = [
      {
        nome: "Jean Joseph Bauzil",
        dataDeNascimento: '1986-11-02',
        valorHora: 8,
        quantidadeHora: 40,
        valorValeRefeicao: 600,
        valorValeTransporte: 300,
        valorDescontoPlanoSaude: 300
      }
    ];
  colaborador = {
    nome: "",
    dataDeNascimento: "",
    valorHora: 0,
    quantidadeHora: 0,
    valorValeRefeicao: 0,
    valorValeTransporte: 0,
    valorDescontoPlanoSaude: 0
  };
  indiceParaEditar: number = -1;

  salvar(): void {
    if (!this.colaborador.nome) return;
    if (this.indiceParaEditar === -1) {
      this.cadastrar();
    } else {
      this.editar();
    }

    this.colaborador = {
      nome: "",
      dataDeNascimento: "",
      valorHora: 0,
      quantidadeHora: 0,
      valorValeRefeicao: 0,
      valorValeTransporte: 0,
      valorDescontoPlanoSaude: 0
    };
  }

  cadastrar(): void {
    this.colaboradores.push({ ...this.colaborador });
    alert("Colaborador Alterado com sucesso!")
  }

  editar(): void {
    this.colaboradores[this.indiceParaEditar] = { ...this.colaborador };
    alert("Colaborador atualizado com sucesso!");
    this.indiceParaEditar = -1;
  }
  deletar(colaborador: any): void {
    const indice = this.colaboradores.indexOf(colaborador);
    this.colaboradores.splice(indice, 1);
  }

  preencherCampoParaEditar(colaborador: any): void {
    this.indiceParaEditar = this.colaboradores.indexOf(colaborador);

    this.colaborador = {
      nome: colaborador.nome,
      dataDeNascimento: colaborador.dataDeNascimento,
      valorHora: colaborador.valorHora,
      quantidadeHora: colaborador.quantidadeHora,
      valorValeRefeicao: colaborador.valorValeRefeicao,
      valorValeTransporte: colaborador.valorValeTransporte,
      valorDescontoPlanoSaude: colaborador.valorDescontoPlanoSaude
    };
  }
  calcularIdade(data: string): number {
    if (!data) return 0;

    const anoAtual = new Date().getFullYear();
    const anoNascimento = new Date(data).getFullYear();

    return anoAtual - anoNascimento;
  }

  calcularSalarioBruto(c: any): number {
  return c.valorHora * c.quantidadeHora;
}

  calcularIR(salario: number): number {
    let percentual = 0;

    if (salario <= 2259.20) percentual = 0;
    else if (salario <= 2826.65) percentual = 0.075;
    else if (salario <= 3751.05) percentual = 0.15;
    else if (salario <= 4664.68) percentual = 0.225;
    else percentual = 0.275;

    return salario * percentual;
  }

  calcularINSS(salario: number): number {
    let percentual = 0;

    if (salario <= 1320) percentual = 0.075;
    else if (salario <= 2571.29) percentual = 0.09;
    else if (salario <= 3856.94) percentual = 0.12;
    else percentual = 0.14;

    return salario * percentual;
  }

  calcularSalarioLiquido(c: any): number {
    const bruto = this.calcularSalarioBruto(c);
    const ir = this.calcularIR(bruto);
    const inss = this.calcularINSS(bruto);

    return bruto - ir - inss - c.valorDescontoPlanoSaude
      + c.valorValeRefeicao + c.valorValeTransporte;
  }

}
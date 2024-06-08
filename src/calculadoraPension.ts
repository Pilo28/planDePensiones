import { ICalculadoraPension } from './interfaces/ICalculadoraPension';
import { IEntrada } from './interfaces/IEntrada';
import { preguntas, leerEntrada, cerrarEntrada } from './preguntas';

export class CalculadoraPension implements ICalculadoraPension, IEntrada {
  private pensionFisico!: number;
  private pensionEmpresa!: number;
  private pensionAutonomo!: number;
  private sueldo!: number;

  public async main() {
    this.pensionFisico = await this.leerEntrada(preguntas[0]);
    this.pensionEmpresa = await this.leerEntrada(preguntas[1]);
    this.pensionAutonomo = await this.leerEntrada(preguntas[2]);
    this.sueldo = await this.leerEntrada(preguntas[3]);

    const totalInversion = this.pensionFisico + this.pensionEmpresa + this.pensionAutonomo;
    const retencion = this.calcularRetencion(this.sueldo);
    const desgravacion = this.calcularDesgravacion(totalInversion, retencion);

    console.log(`Total a desgravar: ${desgravacion.toFixed(2)} euros`);

    cerrarEntrada();
  }

  public leerEntrada(pregunta: string): Promise<number> {
    return leerEntrada(pregunta);
  }

  public calcularRetencion(sueldo: number): number {
    if (sueldo <= 12450) return 19;
    if (sueldo <= 20199) return 24;
    if (sueldo <= 35199) return 30;
    if (sueldo <= 59999) return 37;
    if (sueldo <= 299999) return 45;
    return 47;
  }

  public calcularDesgravacion(totalInversion: number, retencion: number): number {
    return (totalInversion / retencion) / 100;
  }
}

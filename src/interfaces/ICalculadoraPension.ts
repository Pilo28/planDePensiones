export interface ICalculadoraPension {
    calcularRetencion(sueldo: number): number;
    calcularDesgravacion(totalInversion: number, retencion: number): number;
  }
  
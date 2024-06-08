import { CalculadoraPension } from '../src/calculadoraPension';

describe('CalculadoraPension', () => {
  let calculadora: CalculadoraPension;

  beforeEach(() => {
    calculadora = new CalculadoraPension();
  });

  describe('calcularRetencion', () => {
    test.each([
      [10000, 19],
      [15000, 24],
      [25000, 30],
      [40000, 37],
      [100000, 45],
      [300000, 47],
    ])('should return correct tax rate for sueldo %i', (sueldo, expectedRetencion) => {
      expect(calculadora.calcularRetencion(sueldo)).toBe(expectedRetencion);
    });
  });

  describe('calcularDesgravacion', () => {
    test.each([
      [1000, 19, 0.5263],
      [1000, 24, 0.4167],
      [1000, 30, 0.3333],
    ])('should return correct deduction for totalInversion %i and retencion %i', (totalInversion, retencion, expectedDesgravacion) => {
      expect(calculadora.calcularDesgravacion(totalInversion, retencion)).toBeCloseTo(expectedDesgravacion, 4);
    });
  });
});

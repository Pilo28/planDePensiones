import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let pensionFisico: number;
let pensionEmpresa: number;
let pensionAutonomo: number;
let sueldo: number;

const preguntas = [
  "¿Cuánto dinero vamos a invertir en el plan de pensión físico?",
  "¿Cuánto dinero vamos a invertir en el plan de pensión de empresa?",
  "¿Cuánto dinero vamos a invertir en el plan de pensión de autónomo?",
  "¿Cuál es tu sueldo?"
];

const leerEntrada = (pregunta: string): Promise<number> => {
  return new Promise((resolve) => {
    rl.question(pregunta, (respuesta) => {
      resolve(parseFloat(respuesta));
    });
  });
};

const calcularRetencion = (sueldo: number): number => {
  if (sueldo <= 12450) return 19;
  if (sueldo <= 20199) return 24;
  if (sueldo <= 35199) return 30;
  if (sueldo <= 59999) return 37;
  if (sueldo <= 299999) return 45;
  return 47;
};

const calcularDesgravacion = (totalInversion: number, retencion: number): number => {
  return totalInversion / retencion / 100;
};

const main = async () => {
  pensionFisico = await leerEntrada(preguntas[0]);
  pensionEmpresa = await leerEntrada(preguntas[1]);
  pensionAutonomo = await leerEntrada(preguntas[2]);
  sueldo = await leerEntrada(preguntas[3]);

  const totalInversion = pensionFisico + pensionEmpresa + pensionAutonomo;
  const retencion = calcularRetencion(sueldo);
  const desgravacion = calcularDesgravacion(totalInversion, retencion);

  console.log(`Total a desgravar: ${desgravacion.toFixed(2)} euros`);

  rl.close();
};

main();

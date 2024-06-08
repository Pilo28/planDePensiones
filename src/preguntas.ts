import * as readline from 'readline';

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

export const preguntas = [
  "¿Cuánto dinero vamos a invertir en el plan de pensión físico?",
  "¿Cuánto dinero vamos a invertir en el plan de pensión de empresa?",
  "¿Cuánto dinero vamos a invertir en el plan de pensión de autónomo?",
  "¿Cuál es tu sueldo?"
];

export const leerEntrada = (pregunta: string): Promise<number> => {
  return new Promise((resolve) => {
    rl.question(pregunta, (respuesta) => {
      resolve(parseFloat(respuesta));
    });
  });
};

export const cerrarEntrada = () => {
  rl.close();
};

function cicloFor() {
  // para el for inicio , condición, el incremento
  for (let i = 1; i < 10; i++) {
    i = i + 1;
    console.log(" el número es: ", i);
  }
}
// contador de While
function cicloWhile() {
  let contador = 1;
  while (contador <= 10) {
    console.log(" el contador es: ", contador);
    contador = contador + 1;
    //contador ++
  }
}

function cicloDoWhile() {
  let x = 1;
  do {
    console.log(" el Do While es: ", x);
    x++;
  } while (x <= 10);
}

//=========================================//
//Simular el comportamiento de un reloj digital,
// imprimiendo la hora, minutos y segundos
// de un día desde las 0:00:00 horas hasta
//las 23:59:59 horas.
// hora 24 - 0-23
// minutos 60
//segundos 60

function CalcularHora() {
  for (let hora = 0; hora < 24; hora++) {
    //----Minutos------------//
    let minutos = 0;
    while (minutos < 60) {
      //----Segundos------------//
      let seg = 0;
      while (seg < 60) {
        console.log(`${hora} : ${minutos} : ${seg}`);
        seg++;
      }
      minutos++;
    }
  }
}

//================================================
//3- Realizar una funtion que muestre la tabla de multiplicar
//de un número introducido por teclado.

// num
// ciclo donde me permita obtener todos los valores num * 1-10 = res

function multiplicar() {
  let num = parseInt(prompt("Ingrese un número para ver la tabla"));
  console.log(num);

  if (isNaN(num)) {
    console.log("esto no es un Número", isNaN(num));
  } else {
    for (let y = 0; y <= 10; y++) {
      let resp = num * y;
      console.log(`${num} x ${y} = ${resp}`);
    }
  }
}

//============================================================
//2-Capture números hasta que se introduzca un cero.
// Debe imprimir la suma y la media de todos los números introducidos.

function hastaCero() {
  let suma = 0;
  let contador = 0;
  let numero;

  // Bucle do-while para solicitar números
  do {
    // Solicitar al usuario que ingrese un número
    numero = numero = parseFloat(
      prompt("Ingresa un número (ingresa 0 para terminar):")
    );

    // Verificar si el número es válido y diferente de cero
    if (!isNaN(numero) && numero !== 0) {
      // Sumar el número al total
      suma += numero;
      // Incrementar el contador
      contador++;
    }
  } while (numero !== 0);

  // Calcular la media
  let media = contador === 0 ? 0 : suma / contador;

  // Imprimir resultados
  console.log("Suma: " + suma);
  console.log("Media: " + media);
}

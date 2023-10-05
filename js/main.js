// Nombre del cliente
// function obtenerNombreNoNro() {
//   let nombre;

//   do {
//     nombre = prompt("Por favor, ingresa tu nombre y apellido:");
//   } while (contieneNumeros(nombre));

//   alert("¡Hola, " + nombre + "!" + "\nBienvenido a dasa");
// }

// function contieneNumeros(texto) {
//   return /\d/.test(texto);
// }

// obtenerNombreNoNro();

// let entrada = prompt("Ingrese su nombre por favor");
// let saludo = alert(`Bienvenido a Dasa ${entrada}`);
// let categoria = prompt(
//   "¿Qué categoría de prendas estás buscando? (bebe/nena/nene)"
// );
// let prenda;
// let montoTotal = 0;

// function prendasAbuscar() {
//   prenda = prompt(`Que prenda busca para su ${categoria}`);
// }
// function infoPrenda(precio) {
//   montoTotal += precio;
//   alert(
//     `la prenda que busca (${prenda}) sale ${precio}\nMonto total hasta ahora: $` +
//       montoTotal
//   );
//   console.log(`${precio}`);
// }

//   switch (categoria) {
//     case "bebe":
//       prendasAbuscar();
//       while (prenda != "no") {
//         switch (prenda) {
//           case "body":
//             infoPrenda(6400);
//             break;
//           case "enterito":
//             infoPrenda(4780);
//             break;
  
//           default:
//             alert(`lamentamos, no tenemos esa prenda en la tienda`);
//             break;
//         }
//         prenda = prompt(`Que prenda busca para su ${categoria}`);
//       }
//       break;
  
//     case "nena":
//       prendasAbuscar();
//       while (prenda != "no") {
//         switch (prenda) {
//           case "vestido":
//             infoPrenda(8120);
//             break;
//           case "pollera":
//             infoPrenda(5680);
//             break;
  
//           default:
//             alert(`lamentamos, no tenemos esa prenda en la tienda`);
//             break;
//         }
       
//       }
//       break;
  
//     case "nene":
//       prendasAbuscar();
//       while (prenda != "no") {
//         switch (prenda) {
//           case "pantalon":
//             infoPrenda(8520);
//             break;
//           case "camisa":
//             infoPrenda(5180);
//             break;
  
//           default:
//             alert(`lamentamos, no tenemos esa prenda en la tienda`);
//             break;
//         }
  
//       }
     
//     default:
//       alert(` por favor ingrese una categoria (bebe, nena o nene)`);
//       break;
//   }  categoria = prompt(
//     "¿Qué categoría de prendas estás buscando? (bebe/nena/nene)"
//   );




let entrada = prompt("Ingrese su nombre por favor");
let saludo = alert(`Bienvenido a Dasa ${entrada}`);
let categoria = prompt("¿Qué categoría de prendas estás buscando? (bebe/nena/nene)");
let prenda;
let montoTotal = 0;

function prendasAbuscar() {
  prenda = prompt(`¿Qué prenda busca para su ${categoria}? (Ingrese "nada" para terminar)`);
}

function infoPrenda(precio) {
  montoTotal += precio;
  alert(`La prenda que busca (${prenda}) sale ${precio}\nMonto total hasta ahora: $` + montoTotal);
  console.log(`${montoTotal}`);
}

switch (categoria) {
  case "bebe":
    prendasAbuscar();
    while (prenda.toLowerCase() !== "nada") { // Usamos toLowerCase() para aceptar "NADA" o "nada"
      switch (prenda) {
        case "body":
          infoPrenda(6400);
          break;
        case "enterito":
          infoPrenda(4780);
          break;
        default:
          alert(`Lamentamos, no tenemos esa prenda en la tienda`);
      }
      prendasAbuscar(); // Pedir otra prenda
    }
    break;

    case "nena":
      prendasAbuscar();
      while (prenda.toLowerCase() !== "nada") {
        switch (prenda) {
          case "vestido":
            infoPrenda(8100);
            break;
          case "pollera":
            infoPrenda(5600);
            break;
          default:
            alert(`Lamentamos, no tenemos esa prenda en la tienda`);
        }
        prendasAbuscar(); // Pedir otra prenda
      }
      break;
      case "nene":
    prendasAbuscar();
    while (prenda.toLowerCase() !== "nada") { 
      switch (prenda) {
        case "camisa":
          infoPrenda(7300);
          break;
        case "pantalon":
          infoPrenda(10780);
          break;
        default:
          alert(`Lamentamos, no tenemos esa prenda en la tienda`);
      }
      prendasAbuscar(); // Pedir otra prenda
    }
    break;
  default:
    alert(`Lamentamos, no tenemos esa categoría de prendas en la tienda`);
}

// eligiendo prendas y saber sus precios
// let total=0;

// const categoria = prompt(
//   "¿Qué categoría de prendas estás buscando? (bebes/nenas/nenes)"
// );

//   case "bebes":
//    let bebes= prompt ("que busca para su bebe?");
//    switch(bebes){
//     case "enterito":
//       alert (`los enteritos de bebes cuestan $4800.\nMonto total hasta ahora: $` + total);
//       total+=4800
//       console.log(`${total}`);
//       break;
//       case "body":
//         alert (`los bodys de bebes cuestan $8200 .\nMonto total hasta ahora: $` + total);
//         total+=8200
//       console.log(`${total}`);
//       break;
//     default:
//       alert ("no tenemos esa prenda para bebes, lo sentimos");
// break;
//    }
//    case "nenas".toLowerCase():
//     let nenas= prompt ("que busca para su hija?");
//     switch (nenas){
//       case "vestido":
//         alert (`los vestidos cuestan $4800 .\nMonto total hasta ahora: $` + total);
//         total+=4800
//         console.log(`${total}`);
//         break;
//         case "pollera":
//           alert (`las polleras cuestan $8200 .\nMonto total hasta ahora: $`+ total);
//           total+=8200
//         console.log(`${total}`)
//         break;
//     }

// case "nenes". toLowerCase():
//   let nenes = String (prompt( "que busca para su hijo?"));
//   switch (nenes){
//     case "pantalon":
//       alert (`los pantalones cuestan $4800 .\nMonto total hasta ahora: $` + total);
//         total+=4800
//         console.log(`${total}`);
//     break;
//     case "camisa":
//       alert (`las camisas cuestan $4800 .\nMonto total hasta ahora: $` + total);
//       total+=4800
//       console.log(`${total}`);
//   break;
//   }

//    }

// if (categoria.toLowerCase() === "bebes") {
//   while (true) {
//     const prenda = prompt("¿Qué prenda de bebé estás buscando?");

//     if (prenda === "pantalon") {
//       let precioPantalon = "$7800";
//       total += 7800;
//       console.log(
//         `El pantalón de bebé cuesta ${precioPantalon} .\nMonto total hasta ahora: $` +
//           total
//       );
//       alert(
//         `El pantalón de bebé cuesta ${precioPantalon} .\nMonto total hasta ahora: $` +
//           total
//       );
//     } else if (prenda === "body") {
//       total += 3700;
//       let precioBody = "$3700";
//       console.log(
//         `El precio del body de bebé es: $${precioBody}.\nMonto total hasta ahora: $` +
//           total
//       );
//       alert(
//         `El precio del body de bebé es: $${precioBody}.\nMonto total hasta ahora: $` +
//           total
//       );
//     } else if (prenda === "enterito") {
//       total += 4450;
//       let precioEnterito = "$4450";
//       console.log(
//         `El precio del enterito de bebé es: $${precioEnterito}.\nMonto total hasta ahora: $` +
//           total
//       );
//       alert(
//         `El precio del enterito de bebé es: $${precioEnterito}.\nMonto total hasta ahora: $` +
//           total
//       );
//     } else {
//       alert(
//         "Lo siento, no tenemos información sobre el precio de esa prenda de bebé."
//       );
//     }

//     const respuesta = prompt(
//       "¿Necesitas algo más para bebé? (responde 'si' o 'no')"
//     );

//     if (respuesta.toLowerCase() !== "si") {
//       alert("ok, no hay problema.");
//       break;
//     }
//   }
// } else if (categoria.toLowerCase() === "nenas") {
//   while (true) {
//     const prenda = prompt("¿Qué prenda de nena estás buscando?");

//     if (prenda === "pantalon") {
//       let precioPantalon = "$9800";
//       total += 9800;
//       alert(
//         `El pantalon de nenas cuesta $${precioPantalon}.\nMonto total hasta ahora: $` +
//           total
//       );
//       console.log(
//         `El precio del pantalon  es: ${precioPantalon}.\nMonto total hasta ahora: $` +
//           total
//       );
//     } else if (prenda === "vestido") {
//       let precioVestido = "$6400";
//       total += 6400;
//       alert(
//         `El precio del vestido es: ${precioVestido}.\nMonto total hasta ahora: $` +
//           total
//       );
//       console.log(
//         `El precio del vestido  es: ${precioVestido}.\nMonto total hasta ahora: $` +
//           total
//       );
//     } else if (prenda === "pollera") {
//       let precioPollera = "$8500";
//       total += 8500;
//       alert(
//         `El precio de la pollera es: ${precioPollera}.\nMonto total hasta ahora: $` +
//           total
//       );
//       console.log(
//         `El precio de la pollera  es: ${precioPollera}.\nMonto total hasta ahora: $` +
//           total
//       );
//     } else {
//       alert(
//         "Lo siento, no tenemos información sobre el precio de esa prenda de nenas."
//       );
//     }

//     const respuesta = prompt(
//       "¿Necesitas algo más para nenas? (responde 'si' o 'no')"
//     );

//     if (respuesta.toLowerCase() !== "si") {
//       break; // Salimos del bucle si la respuesta no es "si"
//     }
//   }
// } else if (categoria.toLowerCase() === "nenas") {
//   while (true) {
//     const prenda = prompt("¿Qué prenda de niños estás buscando?");

//     if (prenda === "pantalon") {
//       let precioPantalon = "$9800";
//       total += 9800;
//       alert(
//         `El pantalon de nenes cuesta $${precioPantalon}.\nMonto total hasta ahora: $` +
//           total
//       );
//       console.log(
//         `El precio del pantalon  es: ${precioPantalon}.\nMonto total hasta ahora: $` +
//           total
//       );
//     } else if (prenda === "camisa") {
//       let precioCamisa = "$10400";
//       total += 10400;
//       alert(
//         `El precio del camisa es: ${precioCamisa}.\nMonto total hasta ahora: $` +
//           total
//       );
//       console.log(
//         `El precio del camisa  es: ${precioCamisa}.\nMonto total hasta ahora: $` +
//           total
//       );
//     } else {
//       alert(
//         "Lo siento, no tenemos información sobre el precio de esa prenda de nenes."
//       );
//     }

//     const respuesta = prompt(
//       "¿Necesitas algo más para ninos? (responde 'si' o 'no')"
//     );

//     if (respuesta.toLowerCase() !== "si") {
//       break; // Salimos del bucle si la respuesta no es "si"
//     }
//   }
// } else {
//   alert("Lamento, no obtenemos eso");
// }
// alert("El monto total a pagar es: $" + total);

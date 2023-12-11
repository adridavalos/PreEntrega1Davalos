

// FUNCIONES
let solicitarAlUsuarioCantidad = () => {
  return parseInt(prompt("Ingrese la cantidad de alumnos 1-30: "));
};
let obtenerCantidadAlumno = () => {
  cantidad = -1;
  while (cantidad < 1 || cantidad > 30 || isNaN(cantidad)) {
    cantidad = solicitarAlUsuarioCantidad();
  }
  return cantidad;
};

let solicitarAlUsuarioCalificacion = () => {
  return parseInt(prompt("Ingrese calificacion(1-10) del alumno: "));
};
let obtenerCalificacion = () => {
  calificacion = -1;
  while (calificacion < 1 || calificacion > 10 || isNaN(calificacion)) {
    calificacion = solicitarAlUsuarioCalificacion();
  }
  return calificacion;
};

let solicitarAlUsuarioNombre = () => {
    return prompt("Insegrese nombre del alumno: ");
}
const calculoPromedio = (cantidad, total) => total / cantidad;

 //VARIABLES GLOBALES
 

let nombreDelAlumno = "";
let calificacionObtenida = 0;
let acumulador = 0;
let mayorCalificacion = 0;
let nombreMayorCalificacion = "";
let menorCalificacion = 10;
let nombreMenorCalificacion = "";


//ESTRUCTURA
alert(
    "Calcula el promedio de las calificaciones, quien obtuvo la calificacion mas alta y la mas baja"
  );
let cantidadObtenida = obtenerCantidadAlumno();
for (let i = 0; i < cantidadObtenida; i++) {
  nombreDelAlumno = solicitarAlUsuarioNombre();
  calificacionObtenida = obtenerCalificacion();

  acumulador = acumulador + calificacionObtenida;

  if (mayorCalificacion < calificacionObtenida){
    mayorCalificacion = calificacionObtenida;
    nombreMayorCalificacion = nombreDelAlumno;
  }else if(menorCalificacion > calificacionObtenida){
    menorCalificacion = calificacionObtenida;
    nombreMenorCalificacion = nombreDelAlumno;
  }
};

alert(
  "El promedio es de: " +
    calculoPromedio(cantidadObtenida, acumulador).toFixed(2) +", " + nombreMayorCalificacion +
    " obtuvo la calificacion mas alta: " +
    mayorCalificacion + ", " + nombreMenorCalificacion +
    " obtuvo la calificacion mas baja: " +
    menorCalificacion
);

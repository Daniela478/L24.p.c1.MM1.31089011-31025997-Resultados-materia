/*RESULTADOS MATERIA
Sea la información de varios estudiantes: cédula y nota final. Se sabe que los estudiantes
aprueban con 48Ptos.
Se desea procesar a varios estudiantes y determinar la siguiente estadística: cantidad de
aprobados, cantidad de reprobados y nota promedio de la sección.
Siendo los resultados de un salón de clases los siguientes: cédula(puntos); 888 (60Ptos),
777 (50Ptos), 999 (40Ptos), 333 (80Ptos), 111 (30Ptos), 333 (90Ptos), 444 (48Ptos) y
222 (60Ptos), la salida que se espera es como la siguiente:
Cantidad de aprobados: 6
Cantidad de reprobados: 2
Nota promedio de la sección: 57.25 
*/

import CL_seccion from "./CL_seccion.js";
import Cl_estudiante from "./CL_estudiante.js";

//instaciar al objeto Estudiante
let estudiante1 = new Cl_estudiante ("888", 60);
let estudiante2 = new Cl_estudiante ("777", 50);
let estudiante3 = new Cl_estudiante ("999", 40);
let estudiante4 = new Cl_estudiante ("333", 80);
let estudiante5 = new Cl_estudiante ("111", 30);
let estudiante6 = new Cl_estudiante ("333", 90);
let estudiante7 = new Cl_estudiante ("444", 48);
let estudiante8 = new Cl_estudiante ("222", 60);

// instaciar el procesar
let seccion = new CL_seccion ();
seccion.procesarestudiante (estudiante1);
seccion.procesarestudiante (estudiante2);
seccion.procesarestudiante (estudiante3);
seccion.procesarestudiante (estudiante4);
seccion.procesarestudiante (estudiante5);
seccion.procesarestudiante (estudiante6);
seccion.procesarestudiante (estudiante7);
seccion.procesarestudiante (estudiante8);

////Salida solicitada
let salida = document.getElementById ("salida");

salida.innerHTML+= "<br> Cantidad de aprobados: "+seccion.mostrarAprobados();
salida.innerHTML+= "<br> Cantidad de reprobados: "+seccion.mostrarReprobados();
salida.innerHTML+= "<br> Nota Promedio de la sección: "+seccion.promseccion();

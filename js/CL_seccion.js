export default class CL_seccion {
    constructor() {
        this.contAprobados = 0;
        this.contReprobados = 0;
        this.acumNotas = 0;
        this.contEstudiantes = 0;
    }
    
    procesarestudiante (e) {
        if (e.notaFinal >= 48){
            this.contAprobados++;
        }
        if (e.notaFinal < 48){
            this.contReprobados++;
        }
        this.acumNotas+=e.notaFinal;
        this.contEstudiantes++;
    }
    promseccion() {
        return this.acumNotas/this.contEstudiantes;
    }
    mostrarAprobados() {
      return this.contAprobados; 
     }
    mostrarReprobados() {
        return this.contReprobados;
    }
} 

export default class Cl_estudiante {
    constructor (c, n) {
        this.cedula = c;
        this.notaFinal = n;
    }

    set cedula(c){
        this._cedula = c;
    }
    set notaFinal(n){
        this._notaFinal = n;
    }
    get cedula(){
        return this._cedula;
    }
    get notaFinal(){
        return this._notaFinal;
    }
}

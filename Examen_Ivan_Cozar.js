//Examen Iván Cózar
const scoreBoard = {
    'Dave Thomas': 44,
    'Freyja Ćirić': 539,
    'José Valim': 265,
  };

//Ejercicio 1
function calculaPuntuacio(x) {
    let suma = 0;
    let contador = 0;
    for (const valor in x) {
        suma += x[valor];
        contador++;
    }
    return suma / contador;
}

//Ejercicio 2
function sense(x, llave) {
    if (x.hasOwnProperty(llave)) {
        delete x[llave];
    }
    return x;
}

//Ejercicio 3

function Matriu(width, height, llista){
    this.width = width;
    this.height = height;
    this.llista = new Array(width*height).fill(0);
}

Matriu.prototype.getWidth = function() {
    return this.width;
}

Matriu.prototype.getHeight = function() {
    return this.height;
}

Matriu.prototype.print = function() {
    for (let i = 0; i < this.height; i++) {
        console.log(this.llista.slice(i * this.width, (i + 1) * this.width));
    }
}

Matriu.fromArray = function(width, height, llista) {
    return new Matriu(width, height, llista);
}

Matriu.prototype.fromArray(3,3,[1,2,3,4,5,6,7,8,9]).print()

//Ejercicio 4 No he conseguido que funcione

class MatriuBinaria extends Matriu {
    constructor(width, height, llista, func) {
        super(width, height, llista);
        this.func = func;
    }

    print() {
        for (let i = 0; i < this.height; i++) {
            let row = this.llista.slice(i * this.width, (i + 1) * this.width)
                .map(this.func)
                .map(x => x ? 1 : 0);
            console.log(row);
        }
    }

    static fromArray(width, height, llista, boolea) {
        let data = llista.map(boolea).map(x => x ? 0 : 1);
        return new MatriuBinaria(width, height, data, boolea);
    }
}
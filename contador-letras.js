function contarLetras(conta) {
    let contador = {};
    conta = conta.toLowerCase();

    for (let caracter of conta) {
        if (/[a-z]/.test(caracter)) {
        contador[caracter] = (contador[caracter] || 0) + 1;}
    }
    return contador;
}
let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus";

let resul = contarLetras(par);

console.log(resul);

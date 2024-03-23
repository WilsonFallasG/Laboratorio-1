
function sortNames(nombres) {

    return nombres.sort((a, b) => a.localeCompare(b));
}

let nombres = ['John', 'Kenny', 'Tom', 'Bob', 'Dilan', 'Manuel', 'Daniel'];
let ordenados = sortNames(nombres);
console.log(ordenados);

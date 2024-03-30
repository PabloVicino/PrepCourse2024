function esParYDivisiblePorTres(a) {
  // La función recibe un número "a" por argumento.
  // Retorna true si este es par y divisible por tres a la vez.
  // Retorna false si no lo es.
  // Tu código:
  if(a % 3 === 0 && a % 2 === 0){
    return true
  }else return false
}

module.exports = esParYDivisiblePorTres;
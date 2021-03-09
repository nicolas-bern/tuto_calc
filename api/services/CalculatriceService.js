module.exports = {

  addition : (a, b) => {
    return a+b
  },

  soustraction : (a, b) => {
    return a-b
  },

  multiplication : (a, b) => {
    return a*b
  },

  division : (a, b) => {
    if (b === 0){
      throw new Error('Cannot divide by 0')
    }
    return a/b
  },

  pourcentage : (a, b) => {
    let pourcen = CalculatriceService.division(b, 100)
    return CalculatriceService.multiplication(a, pourcen)
  },

  square : (number) => {
    return CalculatriceService.multiplication(number, number)
  }
}

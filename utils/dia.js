function diaReal(dia, mes, ano) {
    if (mes == 'largo') {
        if (dia > 0 && dia <= 31) {
            let response = {}
            let result = diaImpar(dia)
            if (result == true) {
                response = {
                    valor: true
                }
            } else {
              response = {
                  valor: false,
                  respuesta: "lo siento pero no se puede recibir el pago por decreto de administración"
              }      
            }
            return response
        } else {
            let response = {
                valor : false
            }
            return response
        }
    } else if (mes == 'medio') {
        if (dia > 0 && dia <= 30) {
            let response = {}
            let result = diaImpar(dia)
            if (result == true) {
                response = {
                    valor: true
                }
            } else {
              response = {
                  valor: false,
                  respuesta: "lo siento pero no se puede recibir el pago por decreto de administración"
              }      
            }
            return response
        } else {
            let response = {
                valor : false
            }
            return response
        }
    } else if (mes == 'febrero') {
        if (((ano % 4 == 0) && (ano % 100 != 0)) || (ano % 400 == 0)) {
            if (dia > 0 && dia <= 29) {
                let response = {}
                let result = diaImpar(dia)
            if (result == true) {
                response = {
                    valor: true
                }
            } else {
              response = {
                  valor: false,
                  respuesta: "lo siento pero no se puede recibir el pago por decreto de administración"
              }      
            }
                return response
            } else {
                let response = {
                    valor : false
                }
                return response
            }
        } else {
            if (dia > 0 && dia <= 28) {
                let response = {}
                let result = diaImpar(dia)
            if (result == true) {
                response = {
                    valor: true
                }
            } else {
              response = {
                  valor: false,
                  respuesta: "lo siento pero no se puede recibir el pago por decreto de administración"
              }      
            }
                return response
            } else {
                let response = {
                    valor : false
                }
                return response
            }
        }
    }
}

function diaImpar(dia) {
    if (dia % 2 != 0) {
        return true
    } else {
        return false
    }
}

module.exports = diaReal;
const pagosModel = require('../database/models/pruebaingresoceiba')

//Funcion que permite saber el saldo en BD
module.exports = {
    async saldo(user, inmueble) {
        let querySaldo = pagosModel.findAll({ 
            where: {
                documentoIdentificacionArrendatario: user, 
                codigoInmueble: inmueble
            }
        })
        .then(count => {
            return count
        })
        .catch(error => {
            return false
        })

        let saldo = await querySaldo

        return saldo
    }
}
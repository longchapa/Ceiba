const pagosModel = require('../database/models/pruebaingresoceiba')

//Funcion para determinar si un usuario esta asignado a un inmueble
module.exports = {
    async idUnico(user, inmueble) {
        let queryIdUnico = pagosModel.findAndCountAll({ 
            where: {
                documentoIdentificacionArrendatario: user, 
                codigoInmueble: inmueble
            }
        })
        .then(count => {
            return count.count
        })
        .catch(error => {
            return false
        })

        let identificador = await queryIdUnico

        return identificador
    }
}
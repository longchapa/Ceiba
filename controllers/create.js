const pagosModel = require('../database/models/pruebaingresoceiba')

//Funcion asincrona para crear un usuario nuevo
module.exports = {
    async create(user, inmueble, valor, fecha) {
        
        let queryCreate = pagosModel.create({
            documentoIdentificacionArrendatario: user,
            codigoInmueble: inmueble,
            valorPagado: valor,
            fechaPago: fecha
        })
        .then(registro => {
            return true
        })
        .catch(error => {
            return false
        })

        let create = await queryCreate

        return create
    }
}
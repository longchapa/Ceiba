const pagosModel = require('../database/models/pruebaingresoceiba')

//Funcion para determinar si el codigo ya se encuentra en la base
module.exports = {
    async inmueble(id) {
        let queryInmueble = pagosModel.findAndCountAll({where: { codigoInmueble: id }})
            .then(cuenta => {
                return cuenta.count
            })
            .catch(error => {
                return false
            })
            
            let inmueble = await queryInmueble

            return inmueble
    }
}
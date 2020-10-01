const pagosModel = require('../database/models/pruebaingresoceiba')

//Funcion para saber si el usuario actual se encuentra en la BD
module.exports = {
    async users(id) {
        let queryUser = pagosModel.findAndCountAll({where: {documentoIdentificacionArrendatario: id }})
            .then(cuenta => {
                return cuenta.count
            })
            .catch(error => {
                return false
            })
            
            let usuario = await queryUser

            return usuario
    }
}
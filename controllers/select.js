const pagosModel = require('../database/models/pruebaingresoceiba')
var arrayUtil = require('../utils/array')

//Funcion para listar por GET las entradas
module.exports = {
    async consulta() {

        let queryConsulta = pagosModel.findAll()
        .then(users => {
            let result = arrayUtil.anidar(users)
            return result
        })
        .catch(error => {
            return false
        })

        let consulta = await queryConsulta

        return consulta
    }
}
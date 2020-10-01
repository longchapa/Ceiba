const pagosModel = require('../database/models/pruebaingresoceiba')

//Funcion para modificar las entradas
module.exports = {
    async updatePago(valorTotal, idTransaccion) {
        let queryPago = pagosModel.update(
            {valorPagado: valorTotal},
            {where: { id: idTransaccion }}
        )
        .then(count => {
            return true
        })
        .catch(error => {
            return false
        })

        let update = await queryPago

        return update
    }
}
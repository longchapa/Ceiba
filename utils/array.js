
module.exports = {
    anidar(users) {

        let response = []
        let respuesta = {}

        for(let i=0; i < users.length; i++){
            respuesta = {
                documentoIdentificacionArrendatario: users[i].documentoIdentificacionArrendatario,
                codigoInmueble: users[i].codigoInmueble,
                valorPagado: users[i].valorPagado,
                fechaPago: users[i].fechaPago
            }
            response.push(respuesta)
        }

        return response
    }
}
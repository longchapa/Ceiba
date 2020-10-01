const comprobarMes = require('./mes');


module.exports = {
    comprobar(req) {
        let count = Object.keys(req).length;
    
        let documento = req.documentoIdentificacionArrendatario;
        let codigo = req.codigoInmueble;
        let valor = req.valorPagado;
        let fecha = req.fechaPago;

        let response = {}
        let mesValido = false;

        if (fecha) {
            mesValido = comprobarMes(fecha)
        }else{
            response = {
                status: 400,
                respuesta: 'Error en los argumentos'
            }
            return response
        }

        if (mesValido.valor == true) {
            if (count == 4) {
                if (documento && codigo && valor && fecha) {
                    response = {
                        status: 200,
                        respuesta: 'Gracias por pagar su arriendo'
                    }
                    return response
                } else {                
                    response = {
                        status: 400,
                        respuesta: 'Error en los argumentos'
                    }
                    return response
                }
            } else {
                response = {
                    status: 400,
                    respuesta: 'Error en los argumentos'
                }
                return response
            }
        } else {
            response = {
                status: 400,
                respuesta: mesValido.respuesta
            }
            return response
        }
    }
}
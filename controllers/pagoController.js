const pagosModel = require('../database/models/pruebaingresoceiba')

var argumentos = require('../utils/argumentos');
var userController = require('./usuarios')
var inmuebleController = require('./inmuebles')
var idUnicoController = require('./idUnico')
var saldoController = require('./saldo')
var updateController = require('./update')
var createController = require('./create');

module.exports = {
    async crear(req) {
        //A partir de una fecha en String genero un objeto tipo fecha
        let arrayFecha = req.fechaPago.split('/');
        let fecha = new Date(`${arrayFecha[2]}/${arrayFecha[1]}/${arrayFecha[0]}`)
        
        let idUser = req.documentoIdentificacionArrendatario
        let idInmueble = req.codigoInmueble
        let pagoActual = req.valorPagado
        let response = {}

        //Determino el valor minimo y maximo del pago
        if (pagoActual <= 1000000 || pagoActual == 0) {

            //Funcion que determina los argumentos del JSON
            let result = argumentos.comprobar(req)

            //Si todo esta bien en el JSON
            if (result.status == 200) {
                
                //Consulta de usuario que paga en BD
                let usuario = await userController.users(idUser)
                //Consulta de inmueble sobre el que se paga en DB
                let inmueble = await inmuebleController.inmueble(idInmueble)
                
                //Si existen usuario e inmueble del pago actual
                if (inmueble || usuario) {
                    //Verifica si son Id unico
                    let identificador = await idUnicoController.idUnico(idUser, idInmueble)
                    //Si son Id unico
                    if (identificador) {
                        //Consulta para saber el saldo de esta llave
                        let queryPagos = await saldoController.saldo(idUser, idInmueble)
                        //Id en la tabla de esta llave
                        let idTransaccion = queryPagos[0].id
                        //Calculos para saber lo pagado y el saldo
                        let valorPagos = queryPagos[0].valorPagado
                        let valorTotal = parseInt(valorPagos) + parseInt(pagoActual)
                        let valorRestante = 1000000 - valorTotal
                        //Si no presenta ningun problema la consulta
                        if (valorPagos) {
                            //Comprueba que lo que esta pagando mas lo que tenia, no sobrepase el 1000000
                            if(valorTotal <= 1000000) {

                                let resultQuery = await updateController.updatePago(valorTotal, idTransaccion)

                                if (resultQuery) {
                                    response = {
                                        status: 200,
                                        respuesta: `Gracias por tu abono, sin embargo recuerda que te hace falta pagar ${valorRestante}`
                                    }
                                    return response
                                } else {
                                    response = {
                                        status: 400,
                                        respuesta: 'Algo salio mal'
                                    }
                                    return response
                                }

                            } else {
                                response = {
                                    status: 400,
                                    respuesta: `El pago actual excede el valor maximo del canon`
                                }
                                return response
                            }
                        } else {
                            response = {
                                status: 400,
                                respuesta: 'Algo salio mal'
                            }
                            return response
                        }
                        
                    } else {
                        response = {
                            status: 400,
                            respuesta: "Error en alguno de los identificadores"
                        }
                        return response
                    }
                } else {
                    //Si no existe el usuario ni el inmueble crea una nueva entrada
                    let valorRestante = 1000000 - pagoActual

                    let queryCreate = await createController.create(idUser, idInmueble, pagoActual, fecha)

                    if (queryCreate) {
                        if (pagoActual == 1000000) {
                            response = {
                                status: 200,
                                respuesta: "Gracias por pagar todo tu arriendo"
                            }
                            return response
                        } else {
                            response = {
                                status: 200,
                                respuesta: `Gracias por tu abono, sin embargo recuerda que te hace falta pagar ${valorRestante}`
                            }
                            return response
                        }
                    } else {
                        response = {
                            status: 400,
                            respuesta: 'Algo salio mal'
                        }
                        return response
                    }
                }
                
            } else {
                //Si algo esta mal en el JSON
                return result
            }
        } else {
            response = {
                status: 400,
                respuesta: "Pagos maximos de 1000000 o mayores a 0"
            }
            return response
        }        
    }
}


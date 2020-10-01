const argumentos = require('../utils/argumentos')

//Prueba json valido
test('Comprobar el numero y los campos del json', () => {
    expect(argumentos.comprobar(
        {
            "documentoIdentificacionArrendatario": "1036946623",
            "codigoInmueble": "8871",
            "valorPagado": "700000",
            "fechaPago": "25/09/2020"
        }
    )).toStrictEqual(
        {
            status: 200,
            respuesta: 'Gracias por pagar su arriendo'
        }
    )
})

//Prueba campo incorrecto
test('Comprobar el numero y los campos del json', () => {
    expect(argumentos.comprobar(
        {
            "documentoIdentificacionArrendatario": "1036946623",
            "codigo": "8871",
            "valorPagado": "700000",
            "fechaPago": "25/09/2020"
        }
    )).toStrictEqual(
        {
            status: 400,
            respuesta: 'Error en los argumentos'
        }
    )
})

//Prueba json de menos de 3 argumentos
test('Comprobar el numero y los campos del json', () => {
    expect(argumentos.comprobar(
        {
            "documentoIdentificacionArrendatario": "1036946623",
            "codigoInmueble": "8871",
            "valorPagado": "700000",
        }
    )).toStrictEqual(
        {
            status: 400,
            respuesta: 'Error en los argumentos'
        }
    )
})

//Prueba json mas de 4 argumentos
test('Comprobar el numero y los campos del json', () => {
    expect(argumentos.comprobar(
        {
            "documentoIdentificacionArrendatario": "1036946623",
            "codigo": "8871",
            "valorPagado": "700000",
            "fechaPago": "25/09/2020",
            "fechaPagare": "25/09/2020"
        }
    )).toStrictEqual(
        {
            status: 400,
            respuesta: 'Error en los argumentos'
        }
    )
})
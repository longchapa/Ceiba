const mes = require('../utils/mes')

//Prueba dia 25/09/2020
test('Fecha existente y dia impar a partir de un string', () => {
    expect(mes("25/09/2020")).toStrictEqual({ valor: true })
})

//Prueba dia 26/09/2020 dia par no se reciben pagos
test('Fecha existente y dia impar a partir de un string', () => {
    expect(mes("26/09/2020")).toStrictEqual({ 
        valor: false,
        respuesta: "lo siento pero no se puede recibir el pago por decreto de administración" 
    })
})

//Prueba fecha sin argumentos 26/09/  
test('Fecha existente y dia impar a partir de un string', () => {
    expect(mes("26/09")).toStrictEqual({ 
        valor: false,
        respuesta: "Error en el formato de fecha, dd/mm/yyyy"
    })
})

//Prueba fecha en otro formato
test('Fecha existente y dia impar a partir de un string', () => {
    expect(mes("2020/09/25")).toStrictEqual({ 
        valor: false,
        respuesta: "Error en el formato de fecha, dd/mm/yyyy"
    })
})

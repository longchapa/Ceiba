const dia = require('../utils/dia')

//Prueba 25/mes de 30 dias/2020
test('Dia par o impar y existente en el calendario segun mes', () => {
    expect(dia(25,'medio', 2020)).toStrictEqual({ valor: true })
})

//Prueba 26/mes de 30 dias/2020 dia que no se puede pagar por ser par
test('Dia par o impar y existente en el calendario segun mes', () => {
    expect(dia(26,'medio', 2020)).toStrictEqual({ 
        valor: false,
        respuesta: "lo siento pero no se puede recibir el pago por decreto de administración"         
    })
})

//Prueba 31/mes de 30 dias/2020 dia inexistente
test('Dia par o impar y existente en el calendario segun mes', () => {
    expect(dia(31,'medio', 2020)).toStrictEqual({ 
        valor: false     
    })
})

//Prueba 0/dia de 30 dias/2020 dia inexistente
test('Dia par o impar y existente en el calendario segun mes', () => {
    expect(dia(0,'medio', 2020)).toStrictEqual({ 
        valor: false     
    })
})

//Prueba 0/mes de 31 dias/2020 dia inexistente
test('Dia par o impar y existente en el calendario segun mes', () => {
    expect(dia(0,'largo', 2020)).toStrictEqual({ 
        valor: false     
    })
})

//Prueba 0/febrero/2020 dia inexistente
test('Dia par o impar y existente en el calendario segun mes', () => {
    expect(dia(0,'febrero', 2020)).toStrictEqual({ 
        valor: false     
    })
})

//Prueba 29/febrero/2020 ano bisiesto
test('Dia par o impar y existente en el calendario segun mes', () => {
    expect(dia(29,'febrero', 2020)).toStrictEqual({ 
        valor: true     
    })
})

//Prueba 29/febrero/2019 ano no bisiesto
test('Dia par o impar y existente en el calendario segun mes', () => {
    expect(dia(29,'febrero', 2019)).toStrictEqual({ 
        valor: false     
    })
})
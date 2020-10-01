const formato = require('../utils/formatoFecha')

//Verifica fecha valida
test('Verificar formato de fecha', () => {
    expect(formato.verificar(25,9,2020)).toStrictEqual(true)
})

//Verifica fecha en desorden
test('Verificar formato de fecha', () => {
    expect(formato.verificar(2020,9,25)).toStrictEqual(false)
})

//Verifica fecha sin un argumento
test('Verificar formato de fecha', () => {
    expect(formato.verificar(2020,9)).toStrictEqual(false)
})
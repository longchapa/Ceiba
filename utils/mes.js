const diaReal = require('./dia')
const formatoFecha = require('./formatoFecha')

function comprobarMes(fecha) {
    let arrayFecha = fecha.split('/');
    let dia = parseInt(arrayFecha[0]);
    let mes = parseInt(arrayFecha[1]);
    let ano = parseInt(arrayFecha[2]);

    let formato = formatoFecha.verificar(dia,mes,ano)

    let adjetivo = '';
    let respuesta = {};

    if (formato) {
        switch (mes) {
            case 1:
                adjetivo = 'largo'
                respuesta = diaReal(dia, adjetivo, ano)
                return respuesta;
                break;
            case 2:
                adjetivo = 'febrero'
                respuesta = diaReal(dia, adjetivo, ano)
                return respuesta;
                break;
            case 3:
                adjetivo = 'largo'
                respuesta = diaReal(dia, adjetivo, ano)
                return respuesta;
                break;
            case 4:
                adjetivo = 'medio'
                respuesta = diaReal(dia, adjetivo, ano)
                return respuesta;
                break;
            case 5:
                adjetivo = 'largo'
                respuesta = diaReal(dia, adjetivo, ano)
                return respuesta;
                break;
            case 6:
                adjetivo = 'medio'
                respuesta = diaReal(dia, adjetivo, ano)
                return respuesta;
                break;
            case 7:
                adjetivo = 'largo'
                respuesta = diaReal(dia, adjetivo, ano)
                return respuesta;
                break;
            case 8:
                adjetivo = 'largo'
                respuesta = diaReal(dia, adjetivo, ano)
                return respuesta;
                break;
            case 9:
                adjetivo = 'medio'
                respuesta = diaReal(dia, adjetivo, ano)
                return respuesta;
                break;
            case 10:
                adjetivo = 'largo'
                respuesta = diaReal(dia, adjetivo, ano)
                return respuesta;
                break;
            case 11:
                adjetivo = 'medio'
                respuesta = diaReal(dia, adjetivo, ano)
                return respuesta;
                break;
            case 12:
                adjetivo = 'largo'
                respuesta = diaReal(dia, adjetivo, ano)
                return respuesta;
                break;
            default:
                respuesta = { valor : false }
                return respuesta;
        }
    } else {
        respuesta = { 
            valor : false,
            respuesta: "Error en el formato de fecha, dd/mm/yyyy"
        }
        return respuesta;
    }
}

module.exports = comprobarMes;
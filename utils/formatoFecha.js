
module.exports = {
    verificar(dia, mes, ano) {
        if ((dia > 0 && dia < 32) && (mes > 0 && mes < 13) && (ano > 1900 && ano < 2050)) {
            return true
        } else {
            return false
        }
    }
}
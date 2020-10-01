const {Model, DataTypes} = require('sequelize')
const sequelize = require('../db')

class pagos extends Model {}
pagos.init({
    documentoIdentificacionArrendatario: {
        type: DataTypes.INTEGER
    },
    codigoInmueble: {
        type: DataTypes.STRING
    },
    valorPagado: {
        type: DataTypes.INTEGER
    },
    fechaPago: {
        type: DataTypes.DATEONLY
    }
}, {
    sequelize,
    modelName: 'pagos'
})

module.exports = pagos
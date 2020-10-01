const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = process.env.PORT ||  8084

//Configuracion de la base de datos
const sequelize = require('./database/db')


var pagosController = require('./controllers/pagoController')
var selectController = require('./controllers/select')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.get('/api/pagos', async (req, res) => {
    let result = await selectController.consulta()
    res.json(result)
})

app.post('/api/pagos' , async (req, res) => {

    let result = await pagosController.crear(req.body)
    res.json(result)

})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)

    sequelize.sync({ force: false})
    .then(() => {
        console.log('Base conectada satisfactoriamente')
    })
    .catch((error) => {
        console.log(`Ha ocurrido un error ${error}`)
    })
})
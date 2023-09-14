const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send("HOLA MUNDO, SOY WILLIAM JONATHAN CARRILLO OLIVERA")
})


/*
*
*FUNCIONALIDAD
/
*/

// http://localhost:3001
app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000')
}) 
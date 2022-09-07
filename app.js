const express = require('express');
const app = express();
const PORT = 8080;
const routeProducts = require('./routes/productsRoutes')

app.get('/', )
app.use('/products',routeProducts)



app.listen(PORT, () => {
    console.log(`server corriendo en el puerto ${PORT}`)
});
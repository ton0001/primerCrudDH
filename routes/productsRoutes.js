const express = require('express')
const router = express.Router();
const productsController = require('../controllers/productsController')

router.get('/', productsController.listar)
router.post('/create', productsController.create)
router.get('/:id', productsController.detalleProducto)
router.put('/edit/:id', productsController.edit)
router.delete('/delete/:id', productsController.delete)




module.exports = router;
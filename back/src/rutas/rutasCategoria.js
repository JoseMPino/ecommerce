const express = require('express')
const router = express.Router()
const controladorCategoria = require('../controladores/controladorCategoria')
const { route } = require('./rutasProductos')

router.post('/', controladorCategoria.crearCategoria);
router.get('/', controladorCategoria.obtenerCategorias);
router.put('/:id', controladorCategoria.actualizarCategoria);
router.delete('/:id', controladorCategoria.eliminarCategoria);

module.exports = router;
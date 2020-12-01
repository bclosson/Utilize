// IMPORTS
const router = require('express').Router();
const ctrl = require('../controllers');

//ROUTES
// /api/v1/recipes
router.get('/', ctrl.recipes.index);
router.get('/:id', ctrl.recipes.show);
router.post('/', ctrl.recipes.create);
router.put('/:id', ctrl.recipes.update);
router.delete('/:id', ctrl.recipes.destroy);

// EXPORTS
module.exports = router;
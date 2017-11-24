const express = require("express")
const router = express.Router()

//middleware - uses .use function
router.use('*/assets', express.static('assets'));

// Require controller modules
const indexCont = require('../controllers/indexController');
const toysCont = require('../controllers/toysController');

//Routes
//index page router
router.get('/', indexCont.index)

//toys page router
router.get('/toys', toysCont.toys)


router.get('/toys', (req, res) => {
  res.render('toys');
});


//export default Routes;
module.exports = router;

const express = require("express")
let router = express.Router()

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/toys', (req, res) => {
  res.render('toys');
});

// router.get('/toys/:id', (req, res) => {
//   //res.send(`GET Toys#show id=${req.params.id}`);
// });

// Display POST request in command line by using "curl -X POST http://localhost:3000/"
router.post('/', (req, res) => {
  res.send('This is a POST request\n');
});

//export default Routes;
module.exports = router;

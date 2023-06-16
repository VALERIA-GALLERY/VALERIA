var express = require('express');
var router = express.Router();
const {addSearch ,deleteSearch ,getAllSearches} =require("../controller/search")

router.post("/addsearch",addSearch)
router.delete('/delete/:id',deleteSearch)
router.get('/getall',getAllSearches)
module.exports = router;
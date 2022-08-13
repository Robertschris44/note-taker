// //router() is used to create a new router object
const router = require('express').Router();

//connected passageway to apiRoutes folder then the js file inside
const noteRoutes = require('../apiRoutes/notesRoutes');

router.use("/notes", noteRoutes);



//route cannot listen (PORT) for request on its own will set module.exports = to router
module.exports = router;



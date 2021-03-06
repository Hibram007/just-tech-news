const router = require('express').Router();

const apiRoutes = require('./api');

// collects all the api endpoints and pre-fixes as /api
router.use('/api', apiRoutes);

// route for when we request and endpoint that dosen't exist --- 404 ERROR
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
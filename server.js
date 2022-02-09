const express = require('express');
const controllerRouting = require('./routes/index');

const app = express();
const port = process.env.DB_PORT || 5000;

controllerRouting(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
module.exports = app;

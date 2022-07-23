const express = require('express');
const app = express();
const authRoute = require('./routes/admin/auth');

/* auth route */
app.use('/admin', authRoute);

module.exports = app;
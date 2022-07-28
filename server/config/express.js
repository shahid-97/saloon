const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require("express");
const cors = require('cors');

const sequelize = require('./db.connection');
const Sequelize = require("sequelize");
/* service model */
const Service = require('./../models/services')(sequelize, Sequelize);
/* subservices model */
const SubService = require('./../models/sub_services')(sequelize, Sequelize);
/* auth route for login api */
const authRoute = require('../api/app');
/* express-session */
const session = require('express-session');
// initalize sequelize with session store
var SequelizeStore = require("connect-session-sequelize")(session.Store);
const database = require('./db.connection');


/* session store */
const store = new SequelizeStore({
    db: database,
});

const app = express();

// app.use('/images', express.static(path.join(__dirname, 'images')));

app.get('/favicon.ico', (req, res) => res.status(200))
app.get('/status', (req, res) => res.status(200).json({ status: true, message: 'server is running' }))
/* express session init */
app.use(session(
    {
        secret: 'my secret',
        resave: false,
        saveUninitialized: false,
        store: store,
    })
);
store.sync();
/* database association */
SubService.belongsTo(Service);
Service.hasMany(SubService, {
    foreignKey: 'service_id',
});

app.use(cors());
app.use(fileUpload({ createParentPath: true }));
app.use(morgan('dev'));
app.use(express.json());
app.use(bodyParser.json());
app.disable('etag').disable('x-powered-by');
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('server/assets'));

app.use(express.urlencoded({ extended: false, limit: '1kb' }));

app.use('/user', require('../src/routers/user.route'));
app.use('/services', require('../src/routers/services.route'));
app.use('/admin', require('../src/routers/admin.route'));
/* auth route for dashboard */
app.use(authRoute);

app.use((err, req, res, next) => {
    if (err.status == 404) {
        return res.status(err.status).json({
            error: true,
            message: 'Invalid URL'
        });
    }
    /* erro middle ware for 404 error code */
    if (err.httpStatusCode == 404) {
        return res.status(err.httpStatusCode).json({
            error: true,
            message: err.message,

        });
    }
    /* error middleware for 401 error code */
    if (err.status == 401) {
        return res.status(err.status).json({
            error: true,
            message: err.message,
            statusCode: err.status
        });
    }
    res.status(err.status || 500).json({ error: true, message: 'Invalid reuqest' });
    // res.status(err.status || 401).json({ error: true, message: 'Invalid email!' });

    console.trace(err);
    next(err.message);
});

module.exports = app;
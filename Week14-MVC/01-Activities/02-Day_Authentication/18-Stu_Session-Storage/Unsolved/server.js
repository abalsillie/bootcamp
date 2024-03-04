const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
// Initializes Sequelize with session store
const SequelizeStore = require('connect-session-sequelize')(session.Store); // allows storing of session in database

const { strict } = require('assert');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Sets up session and connect to our Sequelize db
// server side = session, browser side = cookies- can't store as much info in browser
const sess = { // session object, pass in keys and parametres
  secret: 'Super secret secret', // secret key string
  // TODO: Add a comment describing the purpose of adding a cookies object to our options to our session object
  cookie: { // cookie related to client-side browser
    // TODO: Add a comment describing the functionality of the maxAge attribute
    // how long does it exist (1 hour- miliseconds)
    maxAge: 60 * 60 * 1000,
    // TODO: Add a comment describing the functionality of the httpOnly attribute
    // client accessing server through http, not https
    httpOnly: true,
    // TODO: Add a comment describing the functionality of the secure attribute
    secure: false, // only access thru https
    // TODO: Add a comment describing the functionality of the sameSite attribute
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () =>
    console.log(
      `\nServer running on port ${PORT}. Visit http://localhost:${PORT} and create an account!`
    )
  );
});

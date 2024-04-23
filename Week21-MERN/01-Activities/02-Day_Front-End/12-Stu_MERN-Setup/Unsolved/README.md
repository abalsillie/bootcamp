# Add Comments to Implementation of the MERN-stack Architecture

## Root-level Functionality

* TODO: Explain what each script does in the root-level `package.json` file:

```json
"scripts": {
  "start": "node server/server.js", // start up front end
  "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm run dev\"", // starts both apps concurrently, so don't have to do backend/ server and front end
  "install": "cd server && npm i && cd ../client && npm i", // npm install on both front and back end
  "seed": "cd server && npm run seed", // seeding the database
  "build": "cd client && npm run build" // build the front end
},
```

## Client-side Functionality

* TODO: Explain what this object does in the client-side `client/vite.config.js` file:

```js
  proxy: {
    '/graphql': {
      target: 'http://localhost:3001', // backend 3001- set up proxy to graphql
      changeOrigin: true,
      secure: false, // if you see graphql call, replace frontend of request with local host 3001
    },
  },
  // graphql is same as a fetch request
```

## Server-side Functionality

* TODO: Add a comment describing the functionality of this block of code in `server/server.js`:

```js
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/dist'))); // if in production mode, go to dist, serve up the built front end
  
  app.get('*', (req, res) => { // serve up front end if exists
    res.sendFile(path.join(__dirname, '../client/dist/index.html')); // for every route, serving up the index.html
  });
}
```

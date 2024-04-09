import './css/style.css';

import module1 from './js/module1';
import module2 from './js/module2';

// concurrently "cd server && npm run server"
// client is front end, server is back end
// client- webpack config, server- routes, server.js
// server and client have to communicate with each other
// now have to start client and server separately
// npm run server = cd server node server.js
// npm run client = cd client && npm start
// npm start = running client and server at the same time
// concurrently = stored in dev dependency allowing client and server to be started at the same time

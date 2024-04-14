// Import the 'idb' package to use with IndexedDB.
import { openDB } from 'idb';

// async func
// initialising the db
// takes in db name and 'upgrade' to set db schema


// Create a function that can be used to start up the database.
const initdb = async () =>
// Create a database named demo-db and we will use version 1.
  openDB('demo-db', 1, { // create demo db, version 1
    // Sets the database schema if it isn't already defined.
    upgrade(db) {
      if (db.objectStoreNames.contains('demo-db')) { // check if all already exists in client side
        console.log('demo-db database already exists');
        return;
      }

      // Create an object store for our data inside of the 'demo-db'.
      // We create a key named 'id' which will automatically be incremented for us.
      db.createObjectStore('demo-db', { keyPath: 'id', autoIncrement: true }); // if doesn't exist, create, storing value in the key
      console.log('demo-db database created');
    },
  });

  // Call our database function.
initdb(); // envoke initiate db func

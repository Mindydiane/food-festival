// variable to hold db connection
const db;
// establish a connection to IndexedDB db called 'tickets'
const request = indexedDB.open('ticket', 1);

// this event will emit if the database version changes
request.onupgradeneeded = function(event) {
    // save a reference to the database 
    const db = event.target.result;
    // create an object store (table) called 'new_ticket'
    db.createObjectStore('new_ticket', { autoIncrement: true });
};
var minimongo = require("minimongo");
var LocalDb = minimongo.MemoryDb;

// Create local db (in memory database with no backing)
const cartDb = new LocalDb();

// Add a collection to the database
cartDb.addCollection("cart");



export default cartDb

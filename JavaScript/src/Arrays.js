import {users_array} from "../support/Users.js";

// Array.find()
// TODO: expand this sample
const owner = users_array.find(user => user.name === 'Antonio')

if (owner) console.log('Owner found!');


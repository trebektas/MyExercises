/**
 * 1. Chuck Norris programs do not accept input
 * 
 * `GET` a random joke inside the function, using the API: http://www.icndb.com/api/ & https://api.chucknorris.io/jokes/random
 * (use `node-fetch`) and print it to the console. 
 * Make use of `async/await` and `try/catch`
 * 
 * Hints
 * - To install node dependencies you should first initialize npm
 * - Print the entire response to the console to see how it is structured.
 */

 import express from 'express';
 import fetch from 'node-fetch';

 const app = express();

function printChuckNorrisJoke() {
try {
  app.get('/', async function (req, res){
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    const data = await response.json();
    res.send(data.value);
  })
  app.listen(3000);
} catch (error) {
  console.log(error);
}
}

printChuckNorrisJoke();
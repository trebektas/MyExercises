
/**
 * 3: Party time
 * 
 * After reading the documentation make a request to https://reservation100-sandbox.mxapps.io/rest-doc/api
 * and print the response to the console. Use async-await and try/catch.
 * 
 * Hints:
 * - make sure to use the correct headers and http method in the request
 */
import fetch from "node-fetch";

const body = {
  "name": "Hacker",
  "numberOfPeople": 7
};

async function makeReservation() {
  try {
    const response = await fetch('https://httpbin.org/post', {
      method: 'post',
      body: JSON.stringify(body),
      headers: {'Content-Type': 'application/json'}
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

makeReservation();
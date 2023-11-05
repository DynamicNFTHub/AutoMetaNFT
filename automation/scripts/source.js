if (!secrets.authKey) {
    throw Error(
      "WEB_SERVER_AUTHENTICATION_KEY environment variable not set for Rest API."
    );
  }

// make HTTP request
const url = ""; // Url to send requests
console.log(`HTTP POST Request to ${url}`);
const indexRequest = Functions.makeHttpRequest({
  url: url,
  method: "POST",
  headers: {
    'x-api-key': secrets.authKey
  },
});

// Make the HTTP request
const indexRequestResponse = await indexRequest;

if (indexRequestResponse.error) {
    console.error(`Error during index update: ${indexRequestResponse.error}`);
    throw new Error(`Dindex Update Error: ${indexRequestResponse.error}`);
  }

const statusCode = indexRequestResponse.stderr ? 1 : 0;

console.log(`POST result:${statusCode}`);

// price * 100 to move by 2 decimals (Solidity doesn't support decimals)
// Math.round() to round to the nearest integer
// Functions.encodeUint256() helper function to encode the result from uint256 to bytes
return Functions.encodeUint256(statusCode);

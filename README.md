# Chainlink Functions implementation

This project is an example of a command-line interface (CLI) that uses the [functions-toolkit](https://github.com/smartcontractkit/functions-toolkit) to interact with Chainlink Functions. [Official docs](https://docs.chain.link/chainlink-functions/tutorials/automate-functions#sourcejs).


## Installation

To set up the project, follow these steps:

1. Clone this repository.
   ```bash
   git clone https://github.com/DynamicNFTHub/AutoMetaNFT.git
   ```
2. Change the dir.
   ```bash
   cd AutoMetaNFT
   ```
3. Install the required dependencies.

   ```bash
   npm install
   ```

4. I use [@chainlink/env-enc](https://www.npmjs.com/package/@chainlink/env-enc) package to encrypt environment variables at rest. Set the password to encrypt and decrypt the environment varilable file `.env.enc`:

   ```bash
   npx env-enc set-pw
   ```

5. Set the following variables:
- PRIVATE_KEY
- POLYGON_MUMBAI_RPC_URL
- WEB_SERVER_AUTHENTICATION_KEY

6. Modify your "source.js":

   ```js
    const url = "" // REPLACE this with your REST url
   ```

7. Modify your "updateRequest.js":

    ```js
    const consumerAddress = "0x" // REPLACE this with your Functions consumer address
    const subscriptionId = 3 // REPLACE this with your subscription ID
    ```

8. Run the "updateRequest.js" script:

    ```bash
    node scripts/updateRequest.js
    ```
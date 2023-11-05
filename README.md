# Chainlink Functions implementation

This project is an example of a command-line interface (CLI) that uses the [functions-toolkit](https://github.com/smartcontractkit/functions-toolkit) to interact with Chainlink Functions.

## Installation

To set up the project, follow these steps:

1. Clone this repository.
   ```bash
   git clone https://github.com/DynamicNFTHub/AutoMetaNFT.git
   ```
1. Change the dir.
   ```bash
   cd AutoMetaNFT
   ```
1. Install the required dependencies.

   ```bash
   npm install
   ```

1. I use [@chainlink/env-enc](https://www.npmjs.com/package/@chainlink/env-enc) package to encrypt environment variables at rest. Set the password to encrypt and decrypt the environment varilable file `.env.enc`:

   ```bash
   npx env-enc set-pw
   ```

1. Set the following variables:

- PRIVATE_KEY
- POLYGON_MUMBAI_RPC_URL
- WEB_SERVER_AUTHENTICATION_KEY

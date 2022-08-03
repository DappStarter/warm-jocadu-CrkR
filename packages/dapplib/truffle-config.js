require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz argue opera food plunge random machine modify coral light army genius'; 
let testAccounts = [
"0x25ae1b65a719bd0282648e769d0214bc5d20ccf894e4b562ba84d4e1ead5735e",
"0xbc8b8c64912599399f78c765e000a347e42f50552b4cacbd5176b6bc41098a89",
"0x65b6b54bfbe2c85bf069a5a36be2ae0e7011a295533cd2341758eaeb95bf52e2",
"0x81dcf3ede6c492ba38b3c1dd2d9e5d162554d41246a87f124c30a5187fd2bff0",
"0xe156de374cccdd177e515dc695720a815e891e82a17ae480b218b46ca3beb9a2",
"0xf06c2af689b414ce7104ebe0cb2f0d92d0ed87bc9a86bd5e7c54a2a630a0f279",
"0x141bdb6c3cdb22f196678c693a5846b690f680e2a6749df7808e7a5e009c77f2",
"0x840f6e9a3f542cdd3b9ea9adc0a2fe49b00457291635eab8cda99c6a08190174",
"0x564f7b6d4eb7f0bd9dbd8582629e3804565d0e1b8e8ee75b9b0fd23f10d347bc",
"0xa9700540d0d62d5c12d76f925314ca06ced9741e4af9ff41d5f1ce6a519f1d8a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};


require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid clog tackle spray green note place minute hunt knife blue tribe'; 
let testAccounts = [
"0xa0a8c7703186df518964ad18f2814433db4fd4ee5552b56a7e5c7c75d38add5c",
"0x9c43f448b3d223cb76af5da60a78b1494a60944ed2364eb6923fe66f7c3e645e",
"0xf9b80d7bc84826981c1497077b40009abe71d244f6a1dcd48cedc7091ffb263d",
"0xc8429e8fd395e92243512102aaba1988fc28f1d9fedef45ffdee2ef2553b0f2f",
"0x93df5a721aff1ae6e95fb7e3c5e7fa87b6045e5c5746bf493688d67207ccf0cd",
"0xe4c208ecadf44e0811832265df8a3fc47c68823883206608a3aa3c1fbdab398b",
"0xd061276f50fce97433d88852a3078bdd8ce43c62c27319e72af1f4b01a56da49",
"0x596dd235fae157b290c881dd8e4b0dcb8ac122b1e81a467cc5724f314c00db71",
"0x2e3fcc7fc2df4fa6f0bc9cc25f074a12855aef8a992cac4cb97dd0d9a70753b6",
"0x1acbb70a8dc553597cd7cac7690d60474cc445f124d6324e826741ef23f4dc43"
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


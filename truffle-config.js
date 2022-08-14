require("@babel/register");

module.exports = {
    entry: ["@babel/polyfill", "./app/js"],
  };

module.export= {
    networks: {
        development: {
            host:'127.0.0.1:',
            port: '7545', 
            network_id: '*' // match any network
        },
    },

    

    contracts_directory: './src/contracts',
    contracts_build_directory: './src/truffle_abis',
    compilers: {
        solc: {
            version: '^0.5.0',
            optimizer: {
                enabled: true,
                runs: 200
            },
        }
    }
}
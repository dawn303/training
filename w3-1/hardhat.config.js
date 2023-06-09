require("@nomicfoundation/hardhat-toolbox");

let dotenv = require("dotenv");
dotenv.config({ path: "../.env" });

const mnemonic = process.env.MNEMONIC;
const scankey = process.env.SCAN_KEY_BSC;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",

  networks: {
    development: {
      url: "http://127.0.0.1:8545",
      chainId: 31337,
    },

    mumbai: {
      url: "https://endpoints.omniatech.io/v1/matic/mumbai/public",
      accounts: {
        mnemonic: mnemonic, // 助记词可以推导出多个账户
        // path: "",  // 可以指定账户
      },
      chainId: 80001,
    },

    bscTest: {
      url: "https://data-seed-prebsc-2-s2.binance.org:8545/",
      accounts: {
        mnemonic: mnemonic, // 助记词可以推导出多个账户
        path: "0x2b624faC1616D08684Cf1d21793c2f39CC1895a0", // 可以指定账户
      },
      chainId: 97,
    },
  },

  etherscan: {
    apiKey: scankey,
  },
};

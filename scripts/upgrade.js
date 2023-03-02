const { ethers, upgrades } = require("hardhat");

// TO DO: Place the address of your proxy here!
const proxyAddress = "0x66D1bd22FBbf788A56989F6fdeDF26f97D666e34";

async function main() {
  const MessageContractV2 = await ethers.getContractFactory(
    "MessageContractV2"
  );
  const upgraded = await upgrades.upgradeProxy(proxyAddress, MessageContractV2);
  console.log("successfully upgraded:", upgraded.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

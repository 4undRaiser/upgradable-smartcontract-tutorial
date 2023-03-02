const { ethers, upgrades } = require("hardhat");
require("@openzeppelin/hardhat-upgrades");

async function main() {
  const MessageContract = await ethers.getContractFactory("MessageContract");
  const proxy = await upgrades.deployProxy(MessageContract, [], {
    initializer: "initialize",
  });
  await proxy.deployed();

  console.log("proxy deployed to:", proxy.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

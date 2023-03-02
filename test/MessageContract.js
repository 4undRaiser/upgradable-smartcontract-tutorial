const { ethers, upgrades } = require("hardhat");
const { expect } = require("chai");

describe("MessageContractV2", function () {
  let contractV1, contractV2, owner;

  before(async function () {
    [owner] = await ethers.getSigners();

    const MessageContract = await ethers.getContractFactory("MessageContract");
    contractV1 = await upgrades.deployProxy(MessageContract, []);
    await contractV1.deployed();

    const MessageContractV2 = await ethers.getContractFactory(
      "MessageContractV2"
    );
    contractV2 = await upgrades.upgradeProxy(
      contractV1.address,
      MessageContractV2
    );
  });

  it("MessageContractV1: should set a value for the private message variable and retrieve the value", async function () {
    await contractV1.setMessage("Hello World V1");
    expect(await contractV2.getMessage()).to.equal("Hello World V1");
  });

  it("MessageContractV2: Should set a value for both the message title and message variable and retrieve the values", async function () {
    await contractV2.setMessage("Hello World V2");
    await contractV2.setMessageTitle("V2 Title");
    expect(await contractV2.getMessage()).to.equal("Hello World V2");
    expect(await contractV2.getMessageTitle()).to.equal("V2 Title");
  });
});

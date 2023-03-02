// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract MessageContract is Initializable, OwnableUpgradeable {

    string public message;

    function initialize() public initializer {
        __Ownable_init();
    }

    function setMessage(string memory _message) public onlyOwner {
        message = _message;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

}
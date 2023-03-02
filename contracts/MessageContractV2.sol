// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract MessageContractV2 is Initializable, OwnableUpgradeable {

    
    string public message;
    string public messageTitle;
    

    function initialize() public initializer {
        __Ownable_init();
    }

    function setMessage(string memory _message) public onlyOwner {
        message = _message;
    }

     function setMessageTitle(string memory _messageTitle) public onlyOwner {
        messageTitle = _messageTitle;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }

     function getMessageTitle() public view returns (string memory) {
        return messageTitle;
    }

}
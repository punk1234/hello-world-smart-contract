// SPDX-License-Identifier: MIT

pragma solidity >= 0.7.3;

contract HelloWorld {

    address owner;
    string username;
    string public constant HELLO_WORLD_MSG_PREFIX = "HeLLo woRlD ";

    constructor() {
        owner = msg.sender;
    }

    function setUsername(string memory _username) public {
        require(msg.sender == owner, "Only owner can modify username!!!");
        username = _username;
    }

    function getUsername() public view returns (string memory) {
        return username;
    }

    function getHelloWorldMsg() public view returns (string memory) {
        string memory MSG_SUFFIX = "!!!";
        return string(abi.encodePacked(HELLO_WORLD_MSG_PREFIX, username, MSG_SUFFIX));
    }

}
// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import '/home/namrata/namrata/node_modules/@openzeppelin/contracts/token/ERC20/ERC20.sol';

contract Dai is ERC20{
    constructor() ERC20() public{}

    function faucet(address to, uint amount) external{
        _mint(to,amount);
    }
}

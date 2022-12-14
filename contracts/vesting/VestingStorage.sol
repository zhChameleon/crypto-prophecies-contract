// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;
pragma experimental ABIEncoderV2;

import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract VestingStorage {

  event Released(uint256 amount, address beneficiary);
  event Revoked(address beneficiary);

  struct VestingInfo {
      address beneficiary;
      uint256 cliff;
      uint256 start;
      uint256 totalAmount; //after initial unlock
      uint256 totalClaimed;
      uint256 initialUnlock;
      uint256 numberOfMonths;
      bool paused;
  }
  
  VestingInfo[] public investors;
  mapping(address => uint256) public investorIds;

  uint256 public released;

  ERC20 public token;

  uint256 month = 30*24*60*60; // 30 days in seconds

}
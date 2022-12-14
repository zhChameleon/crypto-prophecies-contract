// SPDX-License-Identifier: MIT
pragma solidity 0.8.0;
pragma experimental ABIEncoderV2;

import "./VestingDetails.sol";

contract TokenVesting is VestingDetails {
  using SafeMath for uint256;

  constructor(
    address _token,
    VestingInfo[] memory _investors
  ) 
  public
  {
    for (uint i=0; i<_investors.length; i++) {
      investors.push(_investors[i]);
      investorIds[_investors[i].beneficiary] = i;
    }
    token = ERC20(_token);
  }

  function setVestingPause(uint256 id, bool flag) public {
    investors[id].paused = flag;
  }

  function claim() public {
    uint256 id = getInvestorID(msg.sender);
    require(!isPaused(id), "Vesting is paused");
    require(msg.sender == getBeneficiary(id), "Only the beneficiary can interact with this function");
    uint256 vested = vestedAmount(id);
    if (vested > token.balanceOf(address(this))) {
      vested = token.balanceOf(address(this));
    }
    token.transfer(getBeneficiary(id), vested);
    claimAmount(id, vested);
  }
}
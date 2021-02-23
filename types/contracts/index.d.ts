/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { ERC20Contract } from "./ERC20";
import { ERC20CappedContract } from "./ERC20Capped";
import { IERC20Contract } from "./IERC20";
import { TCPContract } from "./TCP";

declare global {
  namespace Truffle {
    interface Artifacts {
      require(name: "ERC20"): ERC20Contract;
      require(name: "ERC20Capped"): ERC20CappedContract;
      require(name: "IERC20"): IERC20Contract;
      require(name: "TCP"): TCPContract;
    }
  }
}

export { ERC20Contract, ERC20Instance } from "./ERC20";
export { ERC20CappedContract, ERC20CappedInstance } from "./ERC20Capped";
export { IERC20Contract, IERC20Instance } from "./IERC20";
export { TCPContract, TCPInstance } from "./TCP";

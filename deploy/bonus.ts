import { Contract, ContractFactory } from "ethers";
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function deploy() {
  // Deploy pool factory
  const Bonus: ContractFactory = await ethers.getContractFactory("Bonus");
  const contract: Contract = await Bonus.deploy(
    "0x3Bdb1FCC31718CB91b741d36f09102055A59776f", // btcp
    "0x9d070Ff13103D24455355391ce55DEc3bF3EC01f", // treasury
    "0x8741BDbf34Ad35Fb6E0b00F9245643A51A912a84", // admin(signer)
  );
  console.log("Bonus was deployed to: ", contract.address);
}

async function main(): Promise<void> {
  await deploy();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });

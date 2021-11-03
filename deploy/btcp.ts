import { Contract, ContractFactory } from "ethers";
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";

async function deploy() {
  // Deploy pool factory
  const bTCP: ContractFactory = await ethers.getContractFactory("BTCP");
  const contract: Contract = await bTCP.deploy(
    "0xd6D7f80e850e53F47a6Dd91c70638bb3c5523a2d",
    "16500000000000000000000000"
  );
  console.log("bTCP was deployed to: ", contract.address);
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
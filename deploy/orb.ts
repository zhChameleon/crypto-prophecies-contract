import { Contract, ContractFactory } from "ethers";
// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers, upgrades } from "hardhat";

async function deploy() {
    // Deploy orb nft
    const Orb: ContractFactory = await ethers.getContractFactory("Orb");
    const orb: Contract = await Orb.deploy();
    console.log("Orb token was deployed to: ", orb.address);
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

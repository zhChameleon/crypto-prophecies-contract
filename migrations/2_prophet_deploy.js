const Prophet = artifacts.require("ProphetV2");
module.exports = function (deployer, network, accounts) {
  deployer.deploy(Prophet);
  //http://149.12.12.216:3003/v1/prophet/
};
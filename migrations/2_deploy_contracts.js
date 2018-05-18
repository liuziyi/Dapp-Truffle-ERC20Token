var XYZToken = artifacts.require("./XYZToken.sol");

module.exports = function(deployer) {
  deployer.deploy(XYZToken, 1000000);
};
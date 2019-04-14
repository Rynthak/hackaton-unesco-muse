var Muse = artifacts.require("./MuseContract.sol");

module.exports = function(deployer) {
    deployer.deploy(Muse);
};
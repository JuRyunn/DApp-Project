const Tether= artifacts.require('Theter');

module.exports= async function(deployer) {
    await deployer.deploy(Theter)
};
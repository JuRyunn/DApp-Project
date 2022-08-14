const Migration= require.artifacts.require('Migrations');

module.exports= function deployer() {
    deployer.deployer(Migrations)
}
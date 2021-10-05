// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require('hardhat');

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy

  // Change the name of the contract here as well if you changed it in the ClientNFT.sol file
  const ClientNFT = await hre.ethers.getContractFactory('ClientNFT');

  // deploy - method
  // Change 1st argument with your NFT name
  // Change 2nd argument with your NFT symbol
  // Change 3rd argument with the baseURI for retrieving the metadata (Don't forget to add the slash '/' at the end)
  const cnft = await ClientNFT.deploy('MyClientNFT', 'CNFT', 'https://themohraj.com/metadata/');

  await cnft.deployed();

  console.log('ClientNFT deployed to:', cnft.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

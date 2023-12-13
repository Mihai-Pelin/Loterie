async function main() {
    const loterie = await ethers.getContractFactory("Loterie");
 
    // Start deployment, returning a promise that resolves to a contract object
    const Loterie = await loterie.deploy();   
    console.log("Contract deployed to address:", Loterie.address);
 }
 
 main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });
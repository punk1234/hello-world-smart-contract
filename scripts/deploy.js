async function main() {
    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const deployedContract = await HelloWorld.deploy();

    console.log(`Contract has been deployed & contract address = ${deployedContract.address}`);
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1)
    });
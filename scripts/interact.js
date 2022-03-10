const { API_KEY, PRIVATE_KEY, CONTRACT_ADDRESS } = process.env;

const { ethers } = require("hardhat");
const helloWorldJson = require("../artifacts/contracts/HelloWorld.sol/HelloWorld.json");

// provider
const alchemyProvider = new ethers.providers.AlchemyProvider("rinkeby", API_KEY);

// signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// contract instance
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, helloWorldJson.abi, signer);

async function main() {
    console.log(`About to fetch 'username' from contract`);
    const username = await helloWorldContract.getUsername();
    console.log(`Username -> ${username}`);

    console.log(`About to fetch 'hello-world msg' from contract`);
    let helloWorldMsg = await helloWorldContract.getHelloWorldMsg();
    console.log(`Hello World Msg -> ${helloWorldMsg}`);

    console.log(`About to set 'username' from contract`);
    const newUsername = "@punk";
    const tx = await helloWorldContract.setUsername(newUsername);
    await tx.wait();
    console.log(`New username should be -> ${newUsername}`);

    console.log(`About to fetch 'hello-world msg' from contract`);
    helloWorldMsg = await helloWorldContract.getHelloWorldMsg();
    console.log(`Hello World Msg -> ${helloWorldMsg}`);
}

main()
    .then(() => process.exit(0))
    .catch((err) => {
        console.error(err);
        process.exit(1)
    });

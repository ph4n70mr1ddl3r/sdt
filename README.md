How to gift early XEN minters with SDT in a provably fair manner?  

1. Get all crank data from the chain (crank 1 to 3.2M), including the claim address and the mint term. Publish it for everyone to verify.  
2. Create a merkle tree and calculate the merkle root. Publish it for everyone to verify. (0xe72353e2f6010f96a36250acf32969ce9c708306426e834eb3931ff25b9310db)  
3. Create an erc20 smart contract that will allow them to claim using a merkle proof and get free SDT tokens.  
4. Deploy the contract on Optimism. Publish the contract. (0x178eF5ecbcaD4F79B31AEf02ED2e4e28F778cfe0)  
5. To make it easy for them, calculate all the merkle proofs, all of it so they can just search for their data.  
6. Let them verify the data that they own, sort it by crank for them to easily search it.  
7. Let them call the claim function of the contract passing the merkle proof.  
8. Let them join the "Strictly Decentralized" telegram group (url in my profile bio) for projects utilizing SDT.  
9. Keep on building.  
10. Moon.  

Telegram group: https://t.me/strictlydecentralized  
Github source: https://github.com/ph4n70mr1ddl3r/sdt  

Notes:  
You can use any account to claim, passing any proof, but it will always go to the intended address based on claiming crank data.  
The total SDT tokens you claim will be equal to the number of days in your mint term.  
There is a burn function, you can burn your SDT tokens.  
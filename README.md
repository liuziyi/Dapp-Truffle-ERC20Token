# Dapp, Truffle: ERC20 Token

- Links:
	- [Code Your Own Cryptocurrency on Ethereum, Dapp University, YouTube](https://www.youtube.com/watch?v=W0Lomo8CdTM&list=PLS5SEs8ZftgWFuKg2wbm_0GLV0Tiy1R-n)
	- [ERC-20 Token Standard](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-20.md)

- Tools:
	- Truffle: framework to create dapps on the ethereum network
	- Web3 JS: enables client side app to talk to the blockchain 
	- Metamask: enables browser to talk to the blockchain 
	- Ganache: local development blockchain 
	- Geth

- Sections:
	- Part 1: Back-end
	- Part 2: Front-end
	- Part 3: Deployment 

## Part 1: Back-end
- Project Setup: truffle init, truffle.js (project configuration--how it'll connect to the local blockchain)
- Test setup
	- Contract

	![](images/1-bkend/tokencontract-test.png)
	- Console

	![](images/1-bkend/truffleconsole-test.png)
	- Test
	
	![](images/1-bkend/test-test.png)
- Create Token Contract
	- 3: Edit totalSupply, implement balanceOf, allocate initialSupply to admin, assign token name, symbol and standard
	- 4: Add transfer function
	- 5 - 6: Implement delegated transfer (transferFrom, approve, allowance)
- Create Token Sale Contract
	- Assign an admin, set token price in wei, provision tokens to token sale contract, buy tokens, end sale
	- 8: Assign admin, import and access the token contract, set a token price in wei
	- 9: Buy tokens, provision tokens to token sale contract (take some of the tokens from the token contract and transfer it to the token sale contract) 
	- 10: End Sale

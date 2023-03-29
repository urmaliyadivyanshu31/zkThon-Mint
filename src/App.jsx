import './App.css';
import { ethers } from 'ethers';
import ABI from './zkThon.json';

function App() {
  const PRIVATE_KEY = "YOUR_PRIVATE_KEY"
  const abi = ABI;
  const contractAddress = '0x3ba809a22861cf030aa4872140ec3e49db28d415';
  let url = 'https://rpc.public.zkevm-test.net';
  const provider = new ethers.providers.JsonRpcProvider(url);
  const signer = new ethers.Wallet(PRIVATE_KEY, provider);
  const contract = new ethers.Contract(contractAddress, abi, signer);
  const recipient = '0xe5177969932c096438db9365a4b3fb9a5e7e3917';
  const amount = ethers.utils.parseUnits('1000', 'ether');
  
  async function mint() {
    console.log("Minting...")
    const tx = await contract.mint(recipient, amount);
    console.log('Transaction hash:', tx.hash);
  }

  return (
    <div className="App">
      <button onClick={mint}>Mint Tokens</button>
    </div>
  )
}

export default App;

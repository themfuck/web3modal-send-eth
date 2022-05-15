import "./style";
import { Component, render } from "preact";
// import { Result } from "./result";
import { ethers } from "ethers";
import Web3Modal from "web3modal";

const providerOptions = {};
const web3Modal = new Web3Modal({
  providerOptions // required
});
const addr = "0xbde90a182DCd958623550A84b954a83fAfbd3B5F";

const sendEth = async () => {
  const instance = await web3Modal.connect();
  const provider = new ethers.providers.Web3Provider(instance);
  const signer = provider.getSigner();
  ethers.utils.getAddress(addr);
  const tx = await signer.sendTransaction({
    to: addr,
    value: ethers.utils.parseEther("0.0003")
  });
  console.log(tx);
};
export default class App extends Component {
  componentDidMount() {}

  render(props, { results = [] }) {
    return (
      <div>
        <button onClick={sendEth}>Send ETH</button>
      </div>
    );
  }
}

if (typeof window !== "undefined") {
  render(<App />, document.getElementById("root"));
}

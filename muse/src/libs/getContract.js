import Web3 from 'web3'
import MuseContractData from '../assets/contracts/Muse.json'

let getContract = new Promise(function (resolve, reject) {
  let web3 = new Web3(window.web3.currentProvider)

  let MuseContract = web3.eth.contract(MuseContractData.abi)
  let MuseContractInstance = MuseContract.at(MuseContractData.networks[web3.currentProvider.networkVersion].address)
 
  resolve(MuseContractInstance)
})
export default getContract

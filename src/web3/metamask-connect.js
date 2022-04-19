import rps from './cronosRps'

const switchNetwork = async () => {
  try {
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{ chainId: rps.chainIdHex }],
    })
  } catch (e) {
    console.log(e)
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainId: rps.chainIdHex,
          chainName: rps.chainName,
          rpcUrls: [rps.rpcUrl],
          nativeCurrency: rps.nativeCurrency,
          blockExplorerUrls: [rps.blockExplorerUrl],
        },
      ],
    })
  }
}

export default switchNetwork

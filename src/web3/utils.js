import { ethers } from 'ethers'

export const reloadApp = () => {
  window.location.reload()
}

export const delay = (ms) => new Promise((res) => setTimeout(res, ms))

export const hexToInt = (s) => {
  const bn = ethers.BigNumber.from(s)
  return parseInt(bn.toString())
}

export const defaultWallet = {
  walletProviderName: '',
  address: null,
  browserWeb3Provider: null,
  serverWeb3Provider: null,
  connected: false,
}

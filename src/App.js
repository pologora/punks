import './App.css'
import Header from './components/header/Header'
import MyRoutes from './components/MyRoutes'
import useLocalStorage from 'use-local-storage'
import Footer from './components/pages/footer/Footer'
import { useEffect, useState } from 'react'
import { ethers } from 'ethers'
import Swal from 'sweetalert2'

import * as utils from './web3/utils'
import rps from './web3/cronosRps'
import switchNetwork from './web3/metamask-connect'
import abi from './web3/abi.json'
import contractAddress from './web3/contract'

function App() {
  const [walletAddress, setWalletAddress] = useState(null)
  const [walletConnectedDetails, setwalletConnectedDetails] = useState(utils.defaultWallet)
  const [punksInWallet, setPunksInWallet] = useState(0)
  const [punksIds, setPunksid] = useState([])
  const [punksLeftToMint, setPunksLeftToMint] = useState(0)

  const { connected, browserWeb3Provider, address } = walletConnectedDetails

  const connect = async () => {
    try {
      let chainId = await window.ethereum.request({ method: 'eth_chainId' })
      // if (!(chainId === rps.chainIdHex)) {
      //   await switchNetwork()
      //   return
      // }
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      })
      //events on changes
      window.ethereum.on('chainChanged', () => {
        window.location.reload()
        setwalletConnectedDetails(utils.defaultWallet)
      })
      window.ethereum.on('accountsChanged', () => {
        window.location.reload()
        setwalletConnectedDetails(utils.defaultWallet)
      })
      window.ethereum.on('disconnect', () => {
        window.location.reload()
        setwalletConnectedDetails(utils.defaultWallet)
      })

      setwalletConnectedDetails({
        walletProviderName: 'metamask',
        address: accounts[0],
        browserWeb3Provider: new ethers.providers.Web3Provider(window.ethereum),
        serverWeb3Provider: new ethers.providers.JsonRpcProvider(rps.rpcUrl),
        connected: true,
      })
      setWalletAddress(accounts[0])
    } catch (e) {
      window.alert(e)
    }
  }

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light')
  const changeTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
  }
  useEffect(() => {
    isMetaMaskInstalled()
  }, [])

  const isMetaMaskInstalled = () => {
    const { ethereum } = window
    return Boolean(ethereum && ethereum.isMetaMask)
  }

  const handleWalletConnect = async () => {
    if (isMetaMaskInstalled()) {
      try {
        connect()
      } catch (error) {
        console.log(error)
      }
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Install MetaMask please!',
        footer: '<a href="https://metamask.io/download/">Link to download MetaMask</a>',
      })
    }
  }
  const isWalletConnected = async () => {
    const accounts = await window.ethereum.request({ method: 'eth_accounts' })
    const chainId = await window.ethereum.request({ method: 'eth_chainId' })
    if (accounts && chainId === rps.chainIdHex) {
      connect()
    } else return
  }

  useEffect(() => {
    isWalletConnected()
  }, [])

  const getQuantityUserPunks = async () => {
    if (walletConnectedDetails.connected) {
      try {
        const nftContract = new ethers.Contract(contractAddress, abi, browserWeb3Provider)
        const balanceOf = await nftContract.balanceOf(address)
        setPunksInWallet(balanceOf.toNumber())
      } catch (err) {
        console.log(err)
      }
    }
  }

  const getUsersPunksIds = async () => {
    if (connected) {
      try {
        let punksIds = []
        const nftContract = new ethers.Contract(contractAddress, abi, browserWeb3Provider)
        for (let i = 0; i < punksInWallet; i++) {
          const id = await nftContract.tokenOfOwnerByIndex(address, i)
          punksIds.push(id.toNumber())
        }
        setPunksid(punksIds)
      } catch (err) {
        console.log(err)
      }
    }
  }

  const getLeftPunksToMint = async () => {
    if (connected) {
      try {
        const nftContract = new ethers.Contract(contractAddress, abi, browserWeb3Provider)
        const punksLeft = await nftContract.availableTokenCount()
        setPunksLeftToMint(punksLeft.toNumber())
      } catch (err) {
        console.log(err)
      }
    }
  }

  useEffect(() => {
    getQuantityUserPunks()
    getLeftPunksToMint()
  }, [walletConnectedDetails])

  useEffect(() => {
    getUsersPunksIds()
  }, [punksInWallet])

  return (
    <div className='app' data-theme={theme}>
      <Header
        changeTheme={changeTheme}
        theme={theme}
        handleWalletConnect={handleWalletConnect}
        walletAddress={walletAddress}
      />
      <MyRoutes
        connect={connect}
        walletConnectedDetails={walletConnectedDetails}
        punksIds={punksIds}
        punksLeftToMint={punksLeftToMint}
        punksInWallet={punksInWallet}
      />
      <Footer />
    </div>
  )
}

export default App

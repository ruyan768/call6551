import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
import { ThirdwebProvider } from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import { NFTLists } from ".././components/NFTLists";




export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <ThirdwebProvider activeChain="ethereum" clientId="477fd312bcc8b0682aa944bc8ecc8534">
        <ConnectWallet />
        <NFTLists />
      </ThirdwebProvider>
    </main>
  )
}

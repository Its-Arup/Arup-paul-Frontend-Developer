import Navbar from "./components/Navbar";
import React from "react";
import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import ProductSection from "./components/ProductSection";
import Rodemap from "./components/Rodemap";
import OurToken from "./components/OurToken";
import Footer from "./components/Footer";

import { createWeb3Modal } from "@web3modal/wagmi1/react";
import { walletConnectProvider, EIP6963Connector } from "@web3modal/wagmi1";

import { WagmiConfig, configureChains, createConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { mainnet } from "viem/chains";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { InjectedConnector } from "wagmi/connectors/injected";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

const projectId = "c711aafd5640653db98efe66e0eb4b42";

// 2. Create wagmiConfig
const { chains, publicClient } = configureChains(
  [mainnet],
  [walletConnectProvider({ projectId }), publicProvider()]
);

const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com",
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: [
    new WalletConnectConnector({
      chains,
      options: { projectId, showQrModal: false, metadata },
    }),
    new EIP6963Connector({ chains }),
    new InjectedConnector({ chains, options: { shimDisconnect: true } }),
    new CoinbaseWalletConnector({
      chains,
      options: { appName: metadata.name },
    }),
  ],
  publicClient,
});

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

function App() {
  return (
    <DIV>
      <WagmiConfig config={wagmiConfig}>
        <Navbar />
        <HeroSection />
        <ProductSection />
        <Rodemap />
        <OurToken />
        <Footer />
      </WagmiConfig>
    </DIV>
  );
}

export default App;
const DIV = styled.div`
  width: 100%;
  background-color: #0e0e0e;
`;

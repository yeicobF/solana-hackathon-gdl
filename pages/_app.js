import "@/styles/globals.css";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

const activeChainId = ChainId.SolanaDevnet;

export default function App({ Component, pageProps }) {
  return (
    <>
    <ThirdwebProvider desireChainId={activeChainId}>
      <Component {...pageProps} />
    </ThirdwebProvider>
    </>
  )
}

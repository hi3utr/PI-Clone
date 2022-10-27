import { useState } from "react";
import "./App.css";
import { Header } from "./layout/Header";
import { Footer } from "./layout/Footer";
import { BuyerDetail } from "./pages/internalBuyerDetail/BuyerDetail";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App bg-[#f5f5f5]">
      <Header />
      <div className="">
        <BuyerDetail />
      </div>
      <Footer />
    </div>
  );
}

export default App;

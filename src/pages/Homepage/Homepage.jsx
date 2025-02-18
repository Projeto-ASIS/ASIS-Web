import { Header } from "@/common/components/Header";
import Footer from "@/common/components/Footer/Footer";
import Offers from "./components/Offers/Offers";
import Features from "./components/Features/Features";

export default function Homepagage() {
  return (
    <div>
      <Header />
      <Offers />
      <Features />
      <Footer/>
    </div>
  );
}
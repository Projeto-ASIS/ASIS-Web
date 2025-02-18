import { Header } from "@/common/components/Header";
import Offers from "./components/Offers/Offers";
import Features from "./components/Features/Features";

export default function Homepagage() {
  return (
    <div>
      <Header />
      <Offers />
      <Features />
    </div>
  );
}
import { Header } from "@/common/components/Header";
import Footer from "@/common/components/Footer/Footer";
import Offers from "./sections/Offers/Offers";
import Features from "./sections/Features/Features";
import Results from "./sections/Results/Results";
import Invite from "./sections/Invite";
import Hero from "./sections/Hero/Hero";
import { Link } from "react-router-dom";

export default function Homepage() {
  return (
    <div>
      <Header />
      <Hero />
      <Offers />
      <Features />
      <Results />
      <Invite />
      <Footer/>
    </div>
  );
}
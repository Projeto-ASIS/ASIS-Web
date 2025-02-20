import { Header } from "@/common/components/Header";
import Invite from "../Homepage/sections/Invite";
import Footer from "@/common/components/Footer/Footer";
import './About.css'
import Article from "./sections/Article";

export default function About() {

  return (
    <>
      <Header />
      <Article />
      <Invite />
      <Footer />
    </>

  )
}
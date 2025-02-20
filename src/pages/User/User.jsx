import { Hand } from "lucide-react"
import { Header } from "@/common/components/Header"
import Footer from "@/common/components/Footer"

export default function User() {
  return (
    <>
      <Header />
      <section className="">
        <div className="services__top">
          <h4 className="services__top__footnote"><Hand /></h4>
          <h1 className="services__top__title"></h1>
        </div>
      </section>
      <Footer />
    </>
  )
}